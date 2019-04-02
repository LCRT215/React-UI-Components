import React from "react";
import "./Card.css";

const CardContent = () => {
  return (
    <div className="card">
      <h2>Get Started with React</h2>
      <p>
        React makes it painless to create Interactive UIs. Design simple views
        for each state in your application.
      </p>
      <p className="url">reactjs.org</p>
    </div>
  );
};

export default CardContent;
