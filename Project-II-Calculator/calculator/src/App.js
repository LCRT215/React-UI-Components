import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay.js";
import NumberButton from "./components/ButtonComponents/NumberButton.js";

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <div className="number-containers">
        <div className="row1">
          <NumberButton buttonStyle="clear" text="clear" />
          <NumberButton buttonStyle="operations top" text="÷" />
        </div>
        <div className="row1">
          <NumberButton buttonStyle="number" text="7" />
          <NumberButton buttonStyle="number" text="8" />
          <NumberButton buttonStyle="number" text="9" />
          <NumberButton buttonStyle="operations" text="x" />
        </div>
        <div className="row2">
          <NumberButton buttonStyle="number" text="4" />
          <NumberButton buttonStyle="number" text="5" />
          <NumberButton buttonStyle="number" text="6" />
          <NumberButton buttonStyle="operations" text="-" />
        </div>
        <div className="row3">
          <NumberButton buttonStyle="number" text="1" />
          <NumberButton buttonStyle="number" text="2" />
          <NumberButton buttonStyle="number" text="3" />
          <NumberButton buttonStyle="operations" text="+" />
        </div>
        <div className="row4">
          <NumberButton buttonStyle="zero" text="0" />
          <NumberButton buttonStyle="operations top" text="=" />
        </div>
      </div>
      {/* <FooterContainer /> */}
    </div>
  );
};

export default App;
