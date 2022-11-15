import React from "react"
import CategoryFourCard from "./CategoryFourCard"

function CategoryFourList(){

    //Do a GET request for each different category? 
    //on back end, only send data for those that meet that category. 
    // do we still use state to then map through that data to reveal all cards through props? 

    const itemCard = items4.map((oneItem) =>(
        <CategoryFourCard 
            id = {oneItem.id}
        />
    ))

    return(
        <div>
            <SearchFour />
            {itemCard}
        </div>
        <div>
            <NavLink to="/CategoryOneList"> Category One Name + Image Circle</NavLink>
            <NavLink to="/CategoryTwoList"> Category Two Name + Image Circle</NavLink>
            <NavLink to="/CategoryThreeList"> Category Three Name + Image Circle </NavLink>
        </div>
    )
}

export default CategoryFourList