import React from "react";
import { Route, Switch } from "react-router-dom";

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
      <Switch>
        <div className="App">
          <Route path="/">

            <Home />
            <hr />
            <StaffPicksList />
            <hr />
            <ItemUnderList />
            <hr />
          </Route>
          <Route path="/items/:id">
            <Details />
          </Route>
          <Route path="/toys">
            <ToysList />
          </Route>
          <Route path="/jewelry">
            <JewelryList />
          </Route>
          <Route path="/electronics">
            <ElectronicsList />
          </Route>
          <Route path="/home_decor">
            <HomeDecorList />
          </Route>
        </div >
      </Switch>
    </div>
  );
}

export default App;

