import React, { useState, useEffect } from "react"
import AllCard from "./AllCards"
import AllSearch from "./AllSearch"

function AllList() {
    const [all, setAll] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:9292/items/all')
            .then((r) => r.json())
            .then(all => setAll(all))
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
      }

    const searchedItems = all.filter((electronic) =>
    electronic.name.toLowerCase().includes(search.toLowerCase()))


    const itemCard = searchedItems.map((thing) => (
        <AllCard
            key={thing.id}
            id={thing.id}
            item={thing}
        />
    ))

    return (
        <>
            <div className="container">
                <h1 className="titles">All Items</h1>
                <AllSearch onSearch={handleSearch} search={search}/>
                {itemCard}
            </div>
        </>
    )
}

export default AllList