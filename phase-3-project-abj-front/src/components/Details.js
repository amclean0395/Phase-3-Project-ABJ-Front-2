import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import InputForm from "./InputForm";

function Details() {

    const [item, setItem] = useState(null)

    const { id } = useParams()

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
                <img src={image} alt="loading..." />
                <p>{name}</p>
                <p>{price}</p>
                <p>{description}</p>
                <p>{brand_name}</p>
                <p>{category}</p>
            </div>

            <div className="reviewInfo">
                {reviews.map((review) => {
                    return (
                        <>
                            <p>{review.user_id}</p>
                            <p>{review.star_rating}</p>
                            <p>{review.comment}</p>
                        </>
                    )
                })}
            </div>
            <InputForm />
        </>
    )
}

export default Details


