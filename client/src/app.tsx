import React, { useEffect } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter } from "react-router-dom";
import { Header, Main, Wrapper, Login } from "./components";
import { useAppContext } from "./context/app_context";
import { CurrentUser } from "./context/types";

function App() {
  const { currentUser, setCurrentUser } = useAppContext();
  let storedCurrentUser = localStorage.getItem("CurrentUser");
  if (storedCurrentUser) {
    storedCurrentUser = JSON.parse(storedCurrentUser);
  }
  const mainLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
  });
  const authLink = setContext((_, { headers }) => {
    const token = `Bearer ${currentUser?.token || ""}`;
    return {
      headers: {
        ...headers,
        authorization: token || "",
      },
    };
  });

  const authMainLink = authLink.concat(mainLink);
  const client = new ApolloClient({
    link: authMainLink,
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    if (!currentUser && storedCurrentUser) {
      setCurrentUser(storedCurrentUser as unknown as CurrentUser);
    }
  }, [storedCurrentUser]);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="bg-dark4 h-screen text-white">
          <Wrapper>
            {!currentUser ? (
              <Login />
            ) : (
              <>
                <Header />
                <Main />
              </>
            )}
          </Wrapper>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
