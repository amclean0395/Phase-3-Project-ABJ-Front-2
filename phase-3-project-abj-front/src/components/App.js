import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import JewelryList from "./JewelryList";
import ToysList from "./ToysList";
import ElectronicsList from "./ElectronicsList";
import HomeDecorList from "./HomeDecorList"
import Details from "./Details"

function App() {

  return (
    < >
      <div>
        <Header />
      </div>  

      <div className="App">
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
          <Route exact path="/">
            <Home />
          </Route>
      </div >
    </>    
  );
}

export default App;

