import React from "react";

function HomeDecorSearch({ onSearch, search }) {
    return (
        <div className="suspect-container">
            <h1>Home Decor!</h1>
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

export default HomeDecorSearch