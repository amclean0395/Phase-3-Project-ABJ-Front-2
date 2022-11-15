import React from "react"
import CategoryThreeCard from "./CategoryThreeCard"

function CategoryThreeList(){

    const itemCard = items3.map((oneItem) =>(
        <CategoryThreeCard 
            id = {oneItem.id}
        />
    ))

    return(
        <div>
             <SearchThree />
            {itemCard}
        </div>
           <div>
            <NavLink to="/CategoryOneList"> Category One Name + Image Circle </NavLink>
           <NavLink to="/CategoryTwoList"> Category Two Name + Image Circle</NavLink>
           <NavLink to="/CategoryFourList"> Category Four Name + Image Circle</NavLink>
       </div>
    )
}

export default CategoryThreeList