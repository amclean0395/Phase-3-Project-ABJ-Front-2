import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import ItemUnderList from "./ItemUnderList"
import JewelryList from "./JewelryList";
import ToysList from "./ToysList";
import ElectronicsList from "./ElectronicsList";
import HomeDecorList from "./HomeDecorList"
import StaffPicksList from "./StaffPicksList";
import Details from "./Details"

function App() {

  return (
    <div>
      <Header />
      <div className="App">
        <Switch>
          <Route path={"/items/:id"}>
            <Details />
          </Route>
          <Route path={"/categories/toys"}>
            <ToysList />
          </Route>
          <Route path={"/categories/jewelry"}>
            <JewelryList />
          </Route>
          <Route path={"/categories/electronics"}>
            <ElectronicsList />
          </Route>
          <Route path={"/categories/home_decor"}>
            <HomeDecorList />
          </Route>
          <Route exact path={"/"} >
            <Home />
            <hr />
            <StaffPicksList />
            <hr />
            <ItemUnderList />
            <hr />
          </Route>
        </Switch>
      </div >
    </div>
  );
}

export default App;

