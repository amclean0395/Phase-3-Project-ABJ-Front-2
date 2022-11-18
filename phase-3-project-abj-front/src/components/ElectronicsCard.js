import React from "react";
import { NavLink } from "react-router-dom"

function ElectronicsCard({ item, id }){
    return(
        <>
            <div className="cards">
                <div>
                    <img className="cardImage" src={item.image} alt="Error Loading Media" width="250"/>
                    <p>{item.name}</p>
                    <p>${item.price}.00</p>
                    <NavLink to={`/items/${id}`}><button> See More Details!</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default ElectronicsCard