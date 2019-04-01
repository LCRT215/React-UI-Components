import React from "react";
import "./Card.css";
import CardContent from "./CardContent.js";
import CardBanner from "./CardBanner";

const CardContainer = () => {
  return (
    <div className="header">
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default CardContainer;
