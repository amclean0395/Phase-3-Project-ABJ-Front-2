import React, { useState } from "react";

function InputForm({ itemId, onNewReview }) {
    const [comment, setComment] = useState('');
    const [starRating, setStarRating] = useState('')

    function addNewReview() {
        fetch(`http://localhost:9292/new_review`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ item_id: itemId, star_rating: starRating, comment: comment })
        })
            .then((r) => r.json())
            .then((review) => {
                onNewReview(review);
                console.log(review);
                setComment(comment)
                setStarRating(starRating)
            })
    }
    // ^^^ useHistory to navigate back to the Details page?
    return (
        <>
            <h3 className="Bold">Submit a Review!</h3>
            <div className="inputForm">
                <form onSubmit={(e) => addNewReview(e)}>
                    <div id="basicTable">
                    
                        <label className="inputTitles">Rating:(/5)</label>
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
                        <label className="inputTitles">Comments</label>
                        <input
                            type="text"
                            id="comments"
                            name="comments"
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                            value={comment}
                        />
                        <br></br>
                    </div>        
                    <div>
                        <button type="submit" className="middleButton">Submit</button>
                    </div>
                </form>    
            </div>
        </>
    )
}

export default InputForm