import React from "react";

function ItemUnderCard({ item }){
    return(
        <>
            <div className="cards">
                <div className="cards">
                    <img src={item.image} alt="Error Loading Media" width="250"/>
                    <p>{item.name}</p>
                </div>
                <div>
                    <button>See More Details!</button>
                </div>
            </div>
        </>
    )
}

export default ItemUnderCard