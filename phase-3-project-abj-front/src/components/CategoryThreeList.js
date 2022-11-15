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
    )
}

export default CategoryThreeList