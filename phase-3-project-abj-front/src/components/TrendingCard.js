import React from "react";
import { Link } from "react-router-dom"

function TrendingCard({ review, id }){
    const { item } = review
    return(
            <div className="cards">
                <div >
                    <img className="cardImage" src={item.image} alt="Error Loading Media" width="250"/>
                    <h5>{item.name}</h5>
                    <h5>${item.price}.00</h5>
                    <Link to={`/items/${id}`}><button> See More Details!</button></Link>
                </div>
            </div>
    )
}

export default TrendingCard