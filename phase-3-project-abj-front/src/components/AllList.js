import React, { useState, useEffect } from "react"
import AllCard from "./AllCards"
function AllList() {
    const [all, setAll] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/items/all')
            .then((r) => r.json())
            .then(electronics => setAll(electronics))
    }, [])

    const itemCard = all.map((thing) => (
        <AllCard
            id={thing.id}
            item={thing}
        />
    ))

    return (
        <>
            <div className="container">
                <h1 className="titles">All</h1>
                {itemCard}
            </div>
        </>
    )
}

export default AllList