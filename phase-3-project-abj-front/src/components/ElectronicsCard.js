import React from "react";
import { Link } from "react-router-dom"

function ElectronicsCard({ item, id }){
    return(
        <>
            <div className="cards">
                <div>
                    <img className="cardImage" src={item.image} alt="Error Loading Media" width="250"/>
                    <p>{item.name}</p>
                    <p>${item.price}.00</p>
                    <Link to={`/items/${id}`}><button> See More Details!</button></Link>
                </div>
            </div>
        </>
    )
}

export default ElectronicsCard