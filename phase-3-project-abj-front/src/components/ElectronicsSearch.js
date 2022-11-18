import React from "react";

function ElectronicsSearch({ onSearch, search }) {
    return (
        <div className="search">
            <label>Search by name:</label>
            <div className="suspect-container">
                <input
                    id="search"
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default ElectronicsSearch