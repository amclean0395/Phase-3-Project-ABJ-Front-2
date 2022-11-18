import React from "react";
// import { Link, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

function StaffPicksCard({ item, id }){
    return(
            <div className="cards">
                <div className="image">
                    <img className="cardImage" src={item.image} alt="Error Loading Media"/>
                </div>
                <div>
                    <p>{item.name}</p>
                    <p>Price: ${item.price}.00</p>
                    <Link to={`/items/${id}`}><button> See More Details!</button></Link>
                    {/* <button onClick={handleClick}> See More Details!</button> */}
                </div>
            </div>
    )
}

export default StaffPicksCard