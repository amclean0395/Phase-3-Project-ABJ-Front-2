import React from "react"
import CategoryOneCard from "./CategoryOneCard"

function CategoryOneList(){




    const itemCard = items.map((oneItem) =>(
        <CategoryOneCard 
            id = {oneItem.id}
        />
    ))

    return(
        <>
            <div>
                <SearchOne />
                {itemCard}
            </div>
            <div>
                <NavLink to="/CategoryTwoList"> Category Two Name + Image Circle</NavLink>
                <NavLink to="/CategoryThreeList"> Category Three Name + Image Circle </NavLink>
                <NavLink to="/CategoryFourList"> Category Four Name + Image Circle</NavLink>
            </div>
        </>
    )
}

export default CategoryOneList