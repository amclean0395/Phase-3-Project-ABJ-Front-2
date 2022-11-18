import React, { useState, useEffect } from "react"
import HomeDecorCard from "./HomeDecorCard"
import HomeDecorSearch from "./HomeDecorSearch"

function HomeDecorList() {
    const [decor, setDecor] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        fetch('http://localhost:9292/categories/Home_Decor')
            .then((r) => r.json())
            .then(decor => setDecor(decor))
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
      }

    const searchedItems = decor.filter((electronic) =>
    electronic.name.toLowerCase().includes(search.toLowerCase()))

    const itemCard = searchedItems.map((thing) => (
        <HomeDecorCard
            key={thing.id}
            id={thing.id}
            item={thing}
        />
    ))

    return (
        <>
            <div className="container">
            <h1 className="titles">Home Decor</h1>
                <HomeDecorSearch onSearch={handleSearch} search={search}/>
                {itemCard}
            </div>
        </>
    )
}

export default HomeDecorList