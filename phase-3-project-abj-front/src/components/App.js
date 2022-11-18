import React from "react"
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import JewelryList from "./JewelryList";
import ToysList from "./ToysList";
import ElectronicsList from "./ElectronicsList";
import HomeDecorList from "./HomeDecorList"
import Details from "./Details"
import Categories from "./Categories";
import AllList from "./AllList";

function App() {

  return (
    < >
      <div className="topPart">
        <Header />
        <Categories />
<<<<<<< HEAD
      </div>

      <div className="App">
        <Switch>
=======
      </div>  

      <div className="App">
>>>>>>> 6b05ba1b500fba596a7e46630573d3af215eb79a
          <Route exact path="/items/:id">
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
          <Route path="/all">
            <AllList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

      </div >
    </>
  );
}

export default App;

