import React from "react";
import "./Header.scss";
import HeaderContent from "./HeaderContent.js";
import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail";
// import "./components/HeaderComponents/HeaderTitle.js";
// import "./components/HeaderComponents/ImageThumbnail.js";

const HeaderContainer = () => {
  return (
    <div className="body">
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;
