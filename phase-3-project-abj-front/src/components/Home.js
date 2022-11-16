import React from "react";
import {NavLink} from "react-router-dom"
import ItemUnder from "./ItemUnder"

function Home(){

    // const categoryCard = categories.map((category)=>{return (

    // )})

    return(
        <div>
            <div>
                <NavLink to="/CategoryOneList">Category One Name + Image Circle</NavLink>
                <NavLink to="/CategoryTwoList"> Category Two Name + Image Circle</NavLink>
                <NavLink to="/CategoryThreeList"> Category Three Name + Image Circle </NavLink>
                <NavLink to="/CategoryFourList"> Category Four Name + Image Circle</NavLink>
            </div>
            <div>
                <ItemUnder />
                {/*ItemsLessThan30*/}
            </div>
            <div>
                <Trending /> 
                {/* Highest reviews */}
            </div>
        </div>
    )
    
}

export default Home