import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter } from "react-router-dom";
import { Header, Main, Wrapper } from "./components";

function App() {
  const mainLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
  });
  const authLink = setContext((_, { headers }) => {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjMjdjMWMyMGQ2OTU0MGU2NDJlODAiLCJpYXQiOjE2OTU2NTIzNzV9._l8rjbpY8EiyW4v-JdyFK_9jqkzIpQut6TxkodGSVLY";
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

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="bg-dark4 h-screen text-white">
          <Wrapper>
            {/* <Login /> */}
            <Header />
            <Main />
          </Wrapper>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
