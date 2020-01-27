import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading.jsx";

import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "yellow";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {" "}
    {greeting}{" "}
  </h1>,
  document.getElementById("root")
);

ReactDOM.render(
  <div>
    <Heading />
  </div>,
  document.getElementById("root")
);
