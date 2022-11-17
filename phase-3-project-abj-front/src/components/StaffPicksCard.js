import React from "react";
import { Link } from "react-router-dom"

function StaffPicksCard({ item, id }){
    return(
        <>
            <div className="cards">
                <div className="cards">
                    <img src={item.image} alt="Error Loading Media" width="250"/>
                    <p>{item.name}</p>
                </div>
                <div>
                    <Link to={`/items/${id}`}><button> See More Details!</button></Link>
                </div>
            </div>
        </>
    )
}

export default StaffPicksCard