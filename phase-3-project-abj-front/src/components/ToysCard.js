import React from "react";
// import {NavLink} from "react-router-dom"

function ToysCard({ item }){
    return(
        <>
            <div className="cards">
                <div className="cards">
                    <img src={item.image} alt="Error Loading Media" />
                </div>
                <div>
                    {/* <button><NavLink to={`/CategoryOneList/${id}`}>See More Details!</NavLink></button> */}
                </div>
            </div>
        </>
    )
}

export default ToysCard