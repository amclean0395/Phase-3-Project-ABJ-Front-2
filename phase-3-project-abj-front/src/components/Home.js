import React from "react";
import ItemOverAmount from "./ItemOverAmount";
import {NavLink} from "react-router-dom"

function Home(){

    const categoryCard = categories.map((category)=>{return (

    )})

    return(
        <div>
            <div>
                <NavLink to="/CategoryOneList">{categoryCard}</NavLink>
                {/* <NavLink to="/CategoryTwoList"> Category Two Name + Image Circle</NavLink>
                <NavLink to="/CategoryThreeList"> Category Three Name + Image Circle </NavLink>
                <NavLink to="/CategoryFourList"> Category Four Name + Image Circle</NavLink> */}
            </div>
            <div>
                <ItemOverAmount />
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