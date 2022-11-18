import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import InputForm from "./InputForm";
import ReviewsList from "./ReviewList";

function Details() {
    const [item, setItem] = useState(null)
    const [itemReviews, setItemReviews] = useState([])
    const { id } = useParams()

    function handleDeleteReview(id) {
        const updatedReview = itemReviews.filter((re) => re.id !== id);
        setItemReviews(updatedReview)
    }

    const handleNewReview = (newReview) => {
        setItemReviews((itemReviews) => [...itemReviews, newReview])
    }

    const handleEditReview = (updatedReview) => {
        setItemReviews(itemReviews => itemReviews.map(oldReview => {
            if (oldReview.id === updatedReview.id) {
                return updatedReview;
            } else {
                return oldReview;
            }
        }))
    }

    useEffect(() => {
        fetch(`http://localhost:9292/items/${id}`)
            .then((r) => r.json())
            .then((item) => {
                setItem(item);
            });
    }, [id]);

    if (!item) return <h1>"Oops! There's nothing here ¯\_(ツ)_/¯"</h1>;

    const { name, price, description, image, brand_name, category, reviews } = item

    return (
        <>
            <br></br>
            <div className="cardInfo">
                <img className="imageSize" src={image} alt="loading..." />
                <p>Name: {name}</p>
                <p>Price: ${price}.00</p>
                <p>Description: {description}</p>
                <p>Brand: {brand_name}</p>
                <p>Category: {category}</p>
            </div>
            <br></br>
            <InputForm
                itemId={item.id}
                onNewReview={handleNewReview}
            />
            <br></br>
            {reviews.length > 0
                ? <ReviewsList
                    reviews={reviews}
                    onDeleteReview={handleDeleteReview}
                    onEditReview={handleEditReview}
                />
                : <h1>No reviews yet!</h1>}
        </>
    )
}

export default Details