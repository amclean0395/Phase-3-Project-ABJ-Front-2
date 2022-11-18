import React from "react";
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <div>
                <NavLink className="itemR" to="/"><button class="btn"><i class="fa fa-home"></i></button></NavLink>
            </div>
            <h1>Instant RegrEtsy</h1>
            <div>
                <NavLink className="itemL" to="*"><button>Cart</button></NavLink>
            </div>
        </div>
    )
}
export default Header