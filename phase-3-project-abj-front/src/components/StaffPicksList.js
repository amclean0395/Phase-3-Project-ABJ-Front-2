import React, { useState, useEffect } from "react"
import StaffPicksCard from "./StaffPicksCard"

function StaffPicksList() {
    const [staffPicks, setStaffPicks] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/items/rando')
            .then((r) => r.json())
            .then(staffPicks => setStaffPicks(staffPicks))
    }, [])

    const itemCard = staffPicks.map((thing) => (
        <StaffPicksCard
            id={thing.id}
            item={thing}
        />
    ))

    return (
        <>
            <div className="container">
                <h2 className>Staff Picks!</h2>
                {itemCard}
            </div>
        </>
    )
}

export default StaffPicksList