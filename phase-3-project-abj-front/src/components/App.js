import React from "react";
import Home from "./Home";
import JewelryList from "./JewelryList";
import ToysList from "./ToysList";
import ElectronicsList from "./ElectronicsList";

function App() {

  return (
    <div className="App">
      <Home />
      <ToysList />
      <JewelryList />
      <ElectronicsList />
    </div >
  );
}

export default App;

