import React from "react";
import { Link } from "react-router-dom"

function ToysCard({ item, id }){
    return(
        <>
            <div className="cards">
                <div >
                    <img  className="cardImage" src={item.image} alt="Error Loading Media" width="250"/>
                    <p>{item.name}</p>
                    <p>${item.price}.00</p>
                    <button><Link to={`/items/${id}`}>See More Details!</Link></button>
                </div>
            </div>
        </>
    )
}

export default ToysCard