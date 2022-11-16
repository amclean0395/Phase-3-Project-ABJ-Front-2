import React, { useState, useEffect } from "react"
import ItemUnderCard from "./ItemUnderCard"

function ItemUnderList() {
    const [itemsUnder, setItemsUnder] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/items/ItemUnder')
            .then((r) => r.json())
            .then(itemsUnder => setItemsUnder(itemsUnder))
    }, [])

    const itemCard = itemsUnder.map((thing) => (
        <ItemUnderCard
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

export default ItemUnderList