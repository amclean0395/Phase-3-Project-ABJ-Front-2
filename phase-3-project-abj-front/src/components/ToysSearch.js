import React from "react";

function ToySearch({ onSearch, search }) {
    return (
        <div className="search">
            <label>Search by name:</label>
            <div className="suspect-container">
                <input
                    id="search"
                    type="text"
                    placeholder="Super Cute Voodoo..."
                    value={search}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default ToySearch