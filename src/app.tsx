import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from "react-router-dom";
import { Header, Home, Wrapper } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black h-screen text-white">
        <Wrapper>
          <Header />
          <Home />
        </Wrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;
