import React from "react";
import ItemOverAmount from "./ItemOverAmount";
import {NavLink} from "react-router-dom"

function Home(){
    return(
        <div>
            <div>
                <NavLink to="/CategoryOneList"> Category One Name + Image Circle</NavLink>
                <NavLink to="/CategoryTwoList"> Category Two Name + Image Circle</NavLink>
                <NavLink to="/CategoryThreeList"> Category Three Name + Image Circle </NavLink>
                <NavLink to="/CategoryFourList"> Category Four Name + Image Circle</NavLink>
            </div>
            <div>
                <ItemOverAmount />
            </div>
            <div>
                <Trending /> 
            </div>
        </div>
    )
    
}

export default Home