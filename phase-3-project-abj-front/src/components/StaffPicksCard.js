import React from "react";
// import { Link, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

function StaffPicksCard({ item, id }){
    // const history = useHistory();

    // function showDetails() {
    //     history.push(`/items/${id}`);
    // }
     return(
        <>
            <div className="cards">
                <div className="cards">
                    <img src={item.image} alt="Error Loading Media" width="250" />
                    <p>{item.name}</p>
                </div>
                <div>
                    {/* <button onClick={showDetails}>Details Plz</button> */}
                    <Link to={`/items/${id}`}><button> See More Details!</button></Link>
                    {/* <button onClick={handleClick}> See More Details!</button> */}
                </div>
            </div>
        </>
    )
}

export default StaffPicksCard