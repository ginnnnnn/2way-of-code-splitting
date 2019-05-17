import React from "react";
import logo from "../logo.svg";

const Page1 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Welcome to React</code>
        </p>
        <button onClick={() => onRouteChange("page1")}>Page1</button>
        <button className="disabled">Page2</button>
        <button onClick={() => onRouteChange("page3")}>Page3</button>
      </header>
    </div>
  );
};

export default Page1;
