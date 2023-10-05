import React from "react";
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";

// ReactDOM.render(<App />, document.getElementById('root')); //old way before react version 18
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
