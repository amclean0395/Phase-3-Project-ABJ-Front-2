import React, { useState, useEffect } from "react"
import AllCard from "./AllCards"
function AllList() {
    const [all, setAll] = useState([])

    useEffect(() => {
<<<<<<< HEAD
        fetch('http://localhost:9292/item_all')
=======
        fetch('http://localhost:9292/items/all')
>>>>>>> 6b05ba1b500fba596a7e46630573d3af215eb79a
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