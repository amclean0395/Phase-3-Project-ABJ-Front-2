import React from "react";

function ToysCard({ item, id }){
    return(
        <>
            <div className="cards">
                <div>
                    <img src={item.image} alt="Error Loading Media" width="250"/>
                    <p>{item.name}</p>
                    <p>${item.price}.00</p>
                    <Link to={`/items/${id}`}><button> See More Details!</button></Link>
                </div>
            </div>
        </>
    )
}

export default JewelryCard