import React from "react";

function JewelrySearch({ onSearch, search }) {
    return (
        <div className="search">
            <label>Search by Name:</label>
            <div className="suspect-container">
                <input
                    id="search"
                    type="text"
                    placeholder="Gold..."
                    value={search}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default JewelrySearch