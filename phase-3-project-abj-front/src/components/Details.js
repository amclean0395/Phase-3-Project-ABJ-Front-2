import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import InputForm from "./InputForm";

function Details() {
    const [review, setReview] = useState([])
    const [item, setItem] = useState(null)

    const { id } = useParams()

  function handleDeleteReview(id) {
    const updatedReview = review.filter((r) => r.id !== id);
    setReview(updatedReview);
  }

    useEffect(() => {
        fetch(`http://localhost:9292/items/${id}`)
            .then((r) => r.json())
            .then((item) => {
                setItem(item);
            });
    }, [id]);

    if (!item) return <div>!</div>;

    const { name, price, description, image, brand_name, category, reviews } = item

    return (
        <>
            <div className="cardInfo">
                <img className="imageSize" src={image} alt="loading..." />
                <p>Name: {name}</p>
                <p>Price: ${price}.00</p>
                <p>Description: {description}</p>
                <p>Brand: {brand_name}</p>
                <p>Category: {category}</p>
            </div>
            <br></br>
            <InputForm />
            <br></br>

            <div className="reviewInfo">
                {reviews.map((review) => {
                    function handleDelete() {
                        fetch(`http://localhost:9292/reviews/${review.id}`, { method: "DELETE", })
                        handleDeleteReview(review.id)
                    }
                    return (
                        <div className="reviews">
                            <p>User Id: {review.user_id}</p>
                            <p>Stars: {review.star_rating}</p>
                            <p>Comments: {review.comment}</p>
                            <button onClick={handleDelete}>Delete:</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Details