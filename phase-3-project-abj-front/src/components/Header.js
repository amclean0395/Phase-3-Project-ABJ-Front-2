import React from "react";
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <div className="container2">
            <nav id="header">
                <NavLink className="links" to="/Home">Home Image here</NavLink>
                <p>Name of Website?!</p>
                <NavLink className="links" to="/Cart">Cart Image here</NavLink>
            </nav>
        </div>
    )
    
}

export default Header