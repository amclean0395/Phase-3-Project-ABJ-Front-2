import React from "react";

function ToysSearch({ onSearch, search }) {
    return (
        <div className="suspect-container">
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

export default ToysSearch
