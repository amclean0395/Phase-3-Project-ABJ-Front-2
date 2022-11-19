import React from "react"
import { Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import JewelryList from "./JewelryList";
import ToysList from "./ToysList";
import ElectronicsList from "./ElectronicsList";
import HomeDecorList from "./HomeDecorList"
import Details from "./Details"
import Categories from "./Categories";
import AllList from "./AllList";
import Cart from "./Cart";

function App() {

  return (
    < >
      <div className="topPart">
        <Header />
        <Categories />
      </div>

      <div className="App">
          <Route exact path="/items/:id">
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
          <Route path="/all">
            <AllList />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
      </div >
    </>
  );
}

export default App;

