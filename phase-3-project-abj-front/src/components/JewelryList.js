import React, { useState, useEffect } from "react"
import JewelryCard from "./JewelryCard"

function JewelryList() {
    const [jewelry, setJewelry] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/categories/Jewelry')
            .then((r) => r.json())
            .then(jewelry => setJewelry(jewelry))
    }, [])

    const itemCard = jewelry.map((jewel) => (
        <JewelryCard
            id={jewel.id}
            item={jewel}
        />
    ))

    return (
        <>
            <div className="container">
                <h1 className="titles">Jewelry</h1>
                {itemCard}
            </div>
        </>
    )
}

export default JewelryList