import React from "react"
import CategoryOneCard from "./CategoryOneCard"

function CategoryOneList(){

    const itemCard = items.map((oneItem) =>(
        <CategoryOneCard 
            id = {oneItem.id}
        />
    ))

    return(
        <div>
             <SearchOne />
            {itemCard}
        </div>
    )
}

export default CategoryOneList