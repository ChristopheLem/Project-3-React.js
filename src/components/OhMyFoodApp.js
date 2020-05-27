import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../css/style.css";

// Components
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import MenuLaNote from "./MenuLaNote";
import MenuLeChic from "./MenuLeChic";
import MenuLeDelice from "./MenuLeDelice";
import MenuLaPalette from "./MenuLaPalette";

function OhMyFoodApp() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/la-note" exact>
          <MenuLaNote />
        </Route>
        <Route path="/Le-chic" exact>
          <MenuLeChic />
        </Route>
        <Route path="/le-delice" exact>
          <MenuLeDelice />
        </Route>
        <Route path="/la-palette" exact>
          <MenuLaPalette />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default OhMyFoodApp