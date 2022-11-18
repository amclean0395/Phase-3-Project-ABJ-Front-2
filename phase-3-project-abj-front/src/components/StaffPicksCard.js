import React from "react";
import { Link } from "react-router-dom"

function StaffPicksCard({ item, id }){
    return(
            <div className="cards">
                <div className="image">
                    <img src={item.image} alt="Error Loading Media"/>
                </div>
                <div>
                    <p>{item.name}</p>
                    <p>Price: ${item.price}.00</p>
                    <Link to={`/items/${id}`}><button> See More Details!</button></Link>
                </div>
            </div>
    )
}

export default StaffPicksCard