import React from "react";
import { NavLink } from "react-router-dom"

function ToysCard({ item, id }){
    return(
        <>
            <div className="cards">
                <div className="cards">
                    <img src={item.image} alt="Error Loading Media" width="250"/>
                    <p>{item.name}</p>
                </div>
                <div>
                    <button><NavLink to={`/items/${id}`}>See More Details!</NavLink></button>
                </div>
            </div>
        </>
    )
}

export default ToysCard