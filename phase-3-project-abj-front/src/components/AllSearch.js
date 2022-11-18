import React from "react";

function AllSearch({ onSearch, search }) {
    return (
        <div className="search">
            <label>Search by Name:</label>
            <div className="suspect-container">
                <input
                    id="search"
                    type="text"
                    placeholder="14K Gold Pearl..."
                    value={search}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default AllSearch