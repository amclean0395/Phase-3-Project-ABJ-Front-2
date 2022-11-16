import React from "react";
import Header from "./Header";
import Home from "./Home";
import ItemUnderList from "./ItemUnderList"
import JewelryList from "./JewelryList";
import ToysList from "./ToysList";
import ElectronicsList from "./ElectronicsList";
import HomeDecorList from "./HomeDecorList"
import StaffPicksList from "./StaffPicksList";

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <ItemUnderList />
      <hr/>
      <StaffPicksList />
      <hr />
      <ToysList />
      <JewelryList />
      <ElectronicsList />
      <HomeDecorList />
    </div >
  );
}

export default App;

