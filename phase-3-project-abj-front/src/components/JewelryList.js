import React, { useState, useEffect } from "react"
import JewelryCard from "./JewelryCard"
import JewelrySearch from "./JewelrySearch"

function JewelryList() {
    const [jewelry, setJewelry] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:9292/categories/Jewelry')
            .then((r) => r.json())
            .then(jewelry => setJewelry(jewelry))
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
      }

      const searchedItems = jewelry.filter((jewel) =>
        jewel.name.toLowerCase()
            .includes(search.toLowerCase()))

    const itemCard = searchedItems.map((jewel) => (
        <JewelryCard
            id={jewel.id}
            item={jewel}
        />
    ))

    return (
        <>
            <div className="container">
                <JewelrySearch onSearch={handleSearch} search={search}/>
                {itemCard}
            </div>
        </>
    )
}

export default JewelryList