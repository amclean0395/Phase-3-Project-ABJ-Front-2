import React, { useState, useEffect } from "react"
import TrendingCard from "./TrendingCard"

function TrendingList() {
    const [trending, setTrending] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/highest_reviews')
            .then((r) => r.json())
            .then(trending => setTrending(trending))
    }, [])

    const itemCard = trending.map((t) => (
        <TrendingCard
            id={t.id}
            review={t}
        />
    ))

    return (
        <>
            <div className="container">
                <h2 className>Trending</h2>
                {itemCard}
            </div>
        </>
    )
}

export default TrendingList