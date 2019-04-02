import React from "react";
import "./Button.css";

const NumberButton = () => {
  return (
    <div className="number-containers">
      <div className="row1">
        <button className="clear">clear</button>
        <button className="operations top">÷</button>
      </div>

      <div className="row1">
        <button className="number">7</button>
        <button className="number">8</button>
        <button className="number">9</button>
        <button className="operations">x</button>
      </div>

      <div className="row2">
        <button className="number">4</button>
        <button className="number">5</button>
        <button className="number"> 6</button>
        <button className="operations">-</button>
      </div>

      <div className="row3">
        <button className="number">1</button>
        <button className="number">2</button>
        <button className="number">3</button>
        <button className="operations">+</button>
      </div>

      <div className="row4">
        <button className="zero">0</button>
        <button className="operations top">=</button>
      </div>
    </div>
  );
};

export default NumberButton;
