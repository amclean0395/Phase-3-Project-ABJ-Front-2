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
    )
}

export default CategoryTwoList