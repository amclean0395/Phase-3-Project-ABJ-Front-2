import React from "react"
import CategoryFourCard from "./CategoryFourCard"

function CategoryFourList(){

    //thought process, each item gets their own state because what it will render 
    //will just be the into for this particular category. Do a GET request for each
    //different category? on back end, only send data for those that meet the requirements. 

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
    )
}

export default CategoryFourList