import React from "react";

function ToysSearch({ onSearch, search }) {
    return (
        <div className="search">
            <label>Search by Name:</label>
            <div className="suspect-container">
                <input
                    id="search"
                    type="text"
                    placeholder="Crossbow..."
                    value={search}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default ToysSearch
