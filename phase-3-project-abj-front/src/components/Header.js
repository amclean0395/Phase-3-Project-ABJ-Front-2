import React from "react";
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div className="container2">
            <nav id="header">
                <h1>Instant RegrEtsy</h1>
                <ul>
                    <NavLink to="/"><li>I wanna go home..</li></NavLink>
                    <NavLink to="*"><li>HERE'S YOUR CART 🛒🖕</li></NavLink>
                </ul>
            </nav>
        </div>
    )

}

export default Header