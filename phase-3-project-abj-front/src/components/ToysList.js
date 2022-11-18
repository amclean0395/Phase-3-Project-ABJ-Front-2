import React, { useState, useEffect } from "react"
import ToysCard from "./ToysCard"
import ToySearch from "./ToysSearch"

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

    const searchedItems = toys.filter((electronic) =>
    electronic.name.toLowerCase().includes(search.toLowerCase()))

    const itemCard = searchedItems.map((toy) => (
        <TsCard
            id={toy.id}
            item={toy}
        />
    ))

    return (
        <>
            <div className="container">
            <h1 className="titles">Toys</h1>
            <ToySearch onSearch={handleSearch}/>
                {itemCard}
            </div>
        </>
    )

    //CHange Test
}

export default ToysList