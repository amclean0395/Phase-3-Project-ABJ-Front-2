import React, { useState, useEffect } from "react"
import ElectronicsCard from "./ElectronicsCard"
import ElectronicsSearch from "./ElectronicsSearch"

function ElectronicList() {
    const [electronics, setElectronics] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:9292/categories/Electronics')
            .then((r) => r.json())
            .then(electronics => setElectronics(electronics))
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
      }

    const searchedItems = electronics.filter((electronic) =>
    electronic.name.toLowerCase().includes(search.toLowerCase()))

    const itemCard = searchedItems.map((thing) => (
        <ElectronicsCard
            id={thing.id}
            item={thing}
        />
    ))

    return (
        <>
            <div className="container">
            <h1 className="titles">Electronics</h1>
                <ElectronicsSearch onSearch={handleSearch}/>
                {itemCard}
            </div>
        </>
    )
}

export default ElectronicList