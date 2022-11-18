import React, { useState, useEffect } from "react"
import HomeDecorCard from "./HomeDecorCard"

function HomeDecorList() {
    const [decor, setDecor] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/categories/Home_Decor')
            .then((r) => r.json())
            .then(decor => setDecor(decor))
    }, [])

    const itemCard = decor.map((thing) => (
        <HomeDecorCard
            id={thing.id}
            item={thing}
        />
    ))

    return (
        <>
            <div className="container">
            <h1 className="titles">Home Decor</h1>
                {itemCard}
            </div>
        </>
    )
}

export default HomeDecorList