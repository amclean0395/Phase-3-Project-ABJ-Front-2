import React from "react"
import ReviewCard from "./ReviewCard"

function ReviewsList({ reviews, onDeleteReview, onEditReview }) {
    

    const reviewCard = reviews.map((review) => {
        return (
            <ReviewCard
                id={review.id}
                review={review}
                onDeleteReview={onDeleteReview}
                onEditReview={onEditReview}
            />
        )
    })
    if (reviews.length === 0) return <h1>Nothing Here!</h1>

    return (
        <>
            <div className="container">
                <h2 className>Item Reviews</h2>
                <ul>
                    {reviewCard}
                </ul>
            </div>
        </>
    )
}

export default ReviewsList