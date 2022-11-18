import React from "react";
import ReviewEditForm from "./ReviewEditForm"

function ReviewCard({ review, onDeleteReview, onEditReview }){
    const { user, star_rating, comment, id } = review

    function handleDelete() {
        fetch(`http://localhost:9292/reviews/${id}`, { 
            method: "DELETE", 
        })
        onDeleteReview(id);
        window.location.reload();
    }

    return(
            <div className="review-cards">
                <div >
                    <li>
                    <img className="cardImage" src={user.image} alt="https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg"/>
                    <p>{user.username}, {user.location}</p>
                    <h5>{star_rating} / 5</h5>
                    <p>{comment}</p>
                    <button onClick={handleDelete} type="submit">Remove Review</button>
                    </li>
                    <ReviewEditForm onEditReview={onEditReview} reviewID={id}/>
                </div>
            </div>
    )
}

export default ReviewCard