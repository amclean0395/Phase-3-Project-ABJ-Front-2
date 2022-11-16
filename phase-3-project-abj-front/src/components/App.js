import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Header from "./Header";
import Home from "./Home";
// import Cart from "./Cart";
// import Details from "./Details";
import ToysList from "./ToysList";
// import CategoryTwoList from "./CategoryTwoList";
// import CategoryThreeList from "./CategoryThreeList";
// import CategoryFourList from "./CategoryFourList";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home"
          element={<Home />}/>
          <Route path="/toys"
          element={<ToysList />}/>
        </Routes>
        {/* <Details /> */}
        {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ToysList" element={<ToysList />}/>
        <Route path="/ToysList/:id" element={<Details />}/>
        <Route path="/CategoryTwoList" element={<CategoryTwoList />}/>
        <Route path="/CategoryTwoList/:id" element={<Details />}/>
        <Route path="/CategoryThreeList" element={<CategoryThreeList />}/>
        <Route path="/CategoryThreeList/:id" element={<Details />}/>
        <Route path="/CategoryFourList" element={<CategoryFourList />}/>
        <Route path="/CategoryFourList/:id" element={<Details />}/>
      </Routes> */}
      </div >
    </Router>
  );
}

export default App;

