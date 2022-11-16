import React from "react";
// import {NavLink} from "react-router-dom"

function ToysCard({ item, id }){
    return(
        <>
            <div className="cards">
                <div className="cards">
                    <img src={item.image} alt="Error Loading Media" />
                    
                </div>
                <div>
                    {/* <NavLink to={`/categories/${id}`}><button>See More Details!</button></NavLink> */}
                </div>
            </div>
        </>
    )
}

export default ToysCard