import React from "react";
import Home from "./Home";
import JewelryList from "./JewelryList";
import ToysList from "./ToysList";
import ElectronicsList from "./ElectronicsList";
import HomeDecorList from "./HomeDecorList"

function App() {

  return (
    <div className="App">
      <Home />
      <ToysList />
      <JewelryList />
      <ElectronicsList />
      <HomeDecorList />
    </div >
  );
}

export default App;

