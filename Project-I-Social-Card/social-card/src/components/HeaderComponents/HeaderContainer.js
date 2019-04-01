import React from "react";
import "./Header.css";
import HeaderContent from "./components/HeaderComponents/HeaderContent.js";
// import "./components/HeaderComponents/HeaderTitle.js";
// import "./components/HeaderComponents/ImageThumbnail.js";

const HeaderContainer = () => {
  return (
    <div className="header">
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;
