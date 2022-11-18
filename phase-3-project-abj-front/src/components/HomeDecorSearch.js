import React from "react";

function HomeDecorSearch({ onSearch, search }) {
    return (
        <div className="search">
            <label>Search by name:</label>
            <div className="suspect-container">
                <input
                    id="search"
                    type="text"
                    placeholder="Octagon Frame..."
                    value={search}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default HomeDecorSearch