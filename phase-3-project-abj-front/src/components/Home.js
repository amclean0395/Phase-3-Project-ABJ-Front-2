import React from "react";
import ItemUnderList from "./ItemUnderList";
import StaffPicksList from "./StaffPicksList";
import TrendingList from "./TrendingList"

function Home() {

    return (
        <div>
            <StaffPicksList />
            <ItemUnderList />
            <TrendingList />
        </div>
    )
}

export default Home