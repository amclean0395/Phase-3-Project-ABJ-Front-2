import React from "react";
import { NavLink } from "react-router-dom"

function Categories() {
    return (
        <div className="Categories">
            <h2 className="categoryTitle">Categories: </h2>
            <nav id="linkContainer">
                <button className="navButtons"><NavLink className="navButtons" to="/all">All</NavLink></button>
                <button className="navButtons"><NavLink className="navButtons" to="/electronics">Electronics</NavLink></button>
                <button className="navButtons"><NavLink className="navButtons" to="/home_decor">Home Decor</NavLink></button>
                <button className="navButtons"><NavLink className="navButtons" to="/jewelry">Jewelry</NavLink></button>
                <button className="navButtons"><NavLink className="navButtons" to="/toys">Toys</NavLink></button>
            </nav>
            <br></br>
        </div>
    )
        
}
export default Categories