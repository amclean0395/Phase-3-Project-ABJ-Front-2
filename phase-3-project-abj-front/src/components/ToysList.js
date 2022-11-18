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
            <div className="container">
            <h1 className="titles">Toys</h1>
                {itemCard}
            </div>
        </>
    )
}

export default ToysList