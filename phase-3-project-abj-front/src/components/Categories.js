import React from "react";
import { NavLink } from "react-router-dom"

function Categories() {
    return (
        <div className="Categories">
            <h2 className="categoryTitle">Categories: </h2>
            <div id="linkContainer">
                <NavLink className="Links" to="/all">All</NavLink>
                <NavLink className="Links" to="/electronics">Electronics</NavLink>
                <NavLink className="Links" to="/home_decor">Home Decor</NavLink>
                <NavLink className="Links" to="/jewelry">Jewelry</NavLink>
                <NavLink className="Links" to="/toys">Toys</NavLink>
            </div>
        </div>
    )
        
}
export default Categories