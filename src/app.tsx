import React from "react";
import { Header, Home, Wrapper } from "./components";

function App() {
  return (
    <div className="bg-black h-screen text-white">
      <Wrapper>
        <Header />
        <Home />
      </Wrapper>
    </div>
  );
}

export default App;
