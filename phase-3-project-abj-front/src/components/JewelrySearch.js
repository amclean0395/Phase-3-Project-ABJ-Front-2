import React from "react";

function JewelrySearch({ onSearch, search }) {
    return (
        <div className="suspect-container">
            <h1>Jewels!</h1>
            <input
                id="search"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={onSearch}
            />
        </div>
    )
}

export default JewelrySearch