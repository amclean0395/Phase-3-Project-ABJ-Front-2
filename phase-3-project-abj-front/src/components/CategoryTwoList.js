import React from "react"
import CategoryTwoCard from "./CategoryTwoCard"

function CategoryTwoList(){

    const itemCard = items3.map((oneItem) =>(
        <CategoryTwoCard 
            id = {oneItem.id}
        />
    ))

    return(
        <div>
             <SearchTwo />
            {itemCard}
        </div>
          </div>
          <div>
           <NavLink to="/CategoryOneList"> Category One Name + Image Circle </NavLink>
          <NavLink to="/CategoryThreeList"> Category Three Name + Image Circle</NavLink>
          <NavLink to="/CategoryFourList"> Category Four Name + Image Circle</NavLink>
      </div>
    )
}

export default CategoryTwoList