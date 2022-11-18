import React, { useState } from "react";

function ReviewEditForm({ onEditReview, reviewID }) {
    const [starRating, setStarRating] = useState('')
    const [comment, setComment] = useState('')


    const handleEdit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:9292/edit_review/${reviewID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                star_rating: starRating, 
                comment: comment
            }),
        })
        .then((r)=>r.json())
        .then((updatedReview) => {
            onEditReview(updatedReview);
        })
    }

    return (
        <div className="inputForm">
            <label>Edit this review!</label>
            <form onSubmit={handleEdit}>
                <div>
                    <label className="inputTitles">New Comment</label>
                    <input
                        type="text"
                        id="comments"
                        name="comments"
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                        value={comment}
                    />
                    <label className="inputTitles">New Rating</label>
                    <input
                        placeholder="ex: 1, 3, 5"
                        type="number"
                        min="1"
                        max="5"
                        id="star_rating"
                        name="star_rating"
                        onChange={(e) => {
                            setStarRating(e.target.value);
                        }}
                        value={starRating}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewEditForm;
