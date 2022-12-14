import React, { useState, useEffect } from "react"
import ToysCard from "./ToysCard"
import ToysSearch from "./ToysSearch"

function ToysList() {
    const [toys, setToys] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:9292/categories/Toys')
            .then((r) => r.json())
            .then(toys => setToys(toys))
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const searchedItems = toys.filter((toy) =>
        toy.name.toLowerCase()
            .includes(search.toLowerCase()))

    const itemCard = searchedItems.map((toy) => (
        <ToysCard
            id={toy.id}
            item={toy}
        />
    ))

    return (
        <>
            <div className="container">
                <h1 className="titles">Toys</h1>
                <ToysSearch onSearch={handleSearch} search={search} />
                {itemCard}
            </div>
        </>
    )
}

export default ToysList