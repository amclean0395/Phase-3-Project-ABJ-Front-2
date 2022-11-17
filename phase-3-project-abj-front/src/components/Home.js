import React from "react";
import { Link } from "react-router-dom";
// import JewelryList from "./JewelryList";
// import ToysList from "./ToysList";
// import ElectronicsList from "./ElectronicsList";
// import HomeDecorList from "./HomeDecorList"

function Home() {

    return (
        <div>
            <p>Choose Your Own Adventure</p>
            <Link to="/categories/toys"><img src="Toys_image_goes_here" alt="Toys!" /></Link>
            <Link to="/categories/jewelry"><img src="Jewels_image_goes_here" alt="Jewels!" /></Link>
            <Link to="/categories/electronics"><img src="Tronix_image_goes_here" alt="Tronix!" /></Link>
            <Link to="/categories/home_decor"><img src="HoDec_image_goes_here" alt="HoDec!" /></Link>        
        </div>
    )
}

export default Home