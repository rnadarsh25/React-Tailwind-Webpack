import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header, Main, Wrapper } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark4 h-screen text-white">
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;
