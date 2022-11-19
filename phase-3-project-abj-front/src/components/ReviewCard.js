import React from "react";
import ReviewEditForm from "./ReviewEditForm"

function ReviewCard({review, onDeleteReview, onEditReview }){
    const { star_rating, comment, id } = review

    function handleDelete() {
        fetch(`http://localhost:9292/reviews/${id}`, { 
            method: "DELETE", 
        })
        onDeleteReview(id);
        window.location.reload();
    }
    
    return(
            <div className="cardInfo">
                    {/* <img className="cardImage2" src={user.image} alt="https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg"/>
                    <p>{user.username}, {user.location}</p> */}
                    <h5>{star_rating} / 5</h5>
                    <p>{comment}</p>
                    <button onClick={handleDelete}>Remove Review</button>
                    <br></br>
                    <ReviewEditForm onEditReview={onEditReview} reviewID={id}/>
            </div>
    )
}

export default ReviewCard