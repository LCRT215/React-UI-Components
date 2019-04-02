import React from "react";
import "./App.scss";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer.js";
import CardContainer from "./components/CardComponents/CardContainer.js";
import FooterContainer from "./components/FooterComponents/Footer.js";

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <CardContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
