import React, { useState, useEffect } from "react"
import ElectronicsCard from "./ElectronicsCard"

function JewelryList() {
    const [electronics, setElectronics] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/categories/Electronics')
            .then((r) => r.json())
            .then(electronics => setElectronics(electronics))
    }, [])

    const itemCard = electronics.map((thing) => (
        <ElectronicsCard
            id={thing.id}
            item={thing}
        />
    ))

    return (
        <>
            <div>
                {itemCard}
            </div>
        </>
    )
}

export default JewelryList