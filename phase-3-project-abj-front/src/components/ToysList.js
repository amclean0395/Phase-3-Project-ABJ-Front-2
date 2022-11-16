import React, { useState, useEffect } from "react"
import ToysCard from "./ToysCard"

function ToysList() {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/categories/Toys')
            .then((r) => r.json())
            .then(toys => setToys(toys))
    }, [])

    const itemCard = toys.map((toy) => (
        <ToysCard
            id={toy.id}
            item={toy}
        />
    ))

    return (
        <>
            <div>
                {/* <SearchOne /> */}
                {itemCard}
            </div>
            <div>
                {/* <NavLink to="/CategoryTwoList"> Category Two Name + Image Circle</NavLink>
                <NavLink to="/CategoryThreeList"> Category Three Name + Image Circle </NavLink>
                <NavLink to="/CategoryFourList"> Category Four Name + Image Circle</NavLink> */}
            </div>
        </>
    )
}

export default ToysList