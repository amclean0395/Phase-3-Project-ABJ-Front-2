import React from "react";
import { NavLink } from "react-router-dom";
import ItemUnderList from "./ItemUnderList";
import StaffPicksList from "./StaffPicksList";

function Home() {

    return (
        <>
            <div>
                <NavLink className="Links" to="/toys">Toys</NavLink>
                <NavLink className="Links" to="/jewelry">Jewelry</NavLink>
                <NavLink className="Links" to="/electronics">Electronics</NavLink>
                <NavLink className="Links" to="/home_decor">Home Decor</NavLink>
            </div>
            <div>
                <StaffPicksList />
                <ItemUnderList />
            </div>
        </>   
    )
}

export default Home