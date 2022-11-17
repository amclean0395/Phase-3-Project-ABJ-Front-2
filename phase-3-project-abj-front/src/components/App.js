// import React, { useState } from "react";
import React from "react"
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import JewelryList from "./JewelryList";
import ToysList from "./ToysList";
import ElectronicsList from "./ElectronicsList";
import HomeDecorList from "./HomeDecorList"
import Details from "./Details"

function App() {
  // const [review, setReview] = useState([])

  // function handleDeleteReview(id) {
  //   const updatedReview = review.filter((r) => r.id !== id);
  //   setReview(updatedReview);
  // }

  return (
    <div>
      <Header />
      <div className="App">
        <Switch>
          <Route path={"/items/:id"}>
            <Details
              // onDeleteReview={handleDeleteReview}
            />
          </Route>
          <Route path={"/toys"}>
            <ToysList />
          </Route>
          <Route path={"/jewelry"}>
            <JewelryList />
          </Route>
          <Route path={"/electronics"}>
            <ElectronicsList />
          </Route>
          <Route path={"/home_decor"}>
            <HomeDecorList />
          </Route>
          <Route exact path={"/"} >
            <Home />
          </Route>
        </Switch>
      </div >
    </div>
  );
}

export default App;

