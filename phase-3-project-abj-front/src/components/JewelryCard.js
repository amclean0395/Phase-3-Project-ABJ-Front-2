import React from "react";
import { Link } from "react-router-dom"

function JewelryCard({ item }){
    return(
        <>
            <div className="cards">
                <div className="cards">
                    <img src={item.image} alt="Error Loading Media" width="250"/>
                    <p>{item.name}</p>
                </div>
                <div>
                <Link to={`/Jewelry`}><button> See More Details!</button></Link>
                </div>
            </div>
        </>
    )
}

export default JewelryCard