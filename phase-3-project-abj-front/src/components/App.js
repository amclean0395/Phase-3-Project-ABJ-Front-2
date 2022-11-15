import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
// import Details from "./Details";
import CategoryOneList from "./CategoryOneList";
import CategoryTwoList from "./CategoryTwoList";
import CategoryThreeList from "./CategoryThreeList";
import CategoryFourList from "./CategoryFourList";

function App() {

  // fetch("http://localhost:9292/high_low")
  //   .then((r) => r.json())
  //   .then((data) => console.log(data))

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/CategoryOneList" element={<CategoryOneList />}/>
        {/* <Route path="/CategoryOneList/:id" element={<Details />}/> */}
        <Route path="/CategoryTwoList" element={<CategoryTwoList />}/>
        {/* <Route path="/CategoryTwoList/:id" element={<Details />}/> */}
        <Route path="/CategoryThreeList" element={<CategoryThreeList />}/>
        {/* <Route path="/CategoryThreeList/:id" element={<Details />}/> */}
        <Route path="/CategoryFourList" element={<CategoryFourList />}/>
        {/* <Route path="/CategoryFourList/:id" element={<Details />}/> */}
      </Routes>
    </div>
  );
}

export default App;

//Change 
