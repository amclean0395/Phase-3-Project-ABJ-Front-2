import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import InputForm from "./InputForm";

function Details() {

    const [item, setItem] = useState(null)
    const [review, setReview] = useState([])

    const { id } = useParams()

    function handleDeleteReview(id) {
        const updatedReview = review.filter((r) => r.id !== id);
        setReview(updatedReview);
      }

    useEffect(() => {
        fetch(`http://localhost:9292/items/${id}`)
            .then((r) => r.json())
            .then((item) => {setItem(item);
            });
    }, [id]);

    // function addUpdatedComment(){
    //     fetch(`http://localhost:9292/items/${id}`)
    //         //add state to the input
    //         //finish patch request method and headers
    //         //make sure patch request route is on backend
    //         //test
            
    //         method: "POST",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         },
    //         body: JSON.stringify(newConcert)
    //     })
    //     .then((r) => r.json())
    //     .then((newConcert) => addConcert(newConcert))


    if (!item) return <div>!</div>;

    const { name, price, description, image, brand_name, reviews } = item

    return (
        <>
        <br></br>
            <div className="cardInfo">
                <img className="imageSize" src={image} alt="loading..." />
                <p className="Bold">Name: {name}</p>
                <p>Brand: {brand_name}</p>
                <p className="Bold">Price: ${price}.00</p>
                <p>Description: {description}</p>
            </div>
            <br></br>
            <InputForm />
            <br></br>

            <div className="reviewInfo">
                {reviews.map((review) => {

                    function handleDelete(){
                        fetch(`http://localhost:9292/reviews/${review.id}`, { 
                            method: "DELETE", 
                        })
                        handleDeleteReview(review.id)
                    }

                    return (
                        <div className="reviews">
                            <p className="Bold">User Id: {review.user_id}</p>
                            <p className="Bold">Stars: {review.star_rating}</p>
                            <p>Comment: {review.comment}</p>
                            <input type="text" placeholder={review.comment}></input>
                            {/* <button onClick={addUpdatedComment}>submit updated comment</button> */}
                            <button>Submit Comment Edit</button>
                            <button onClick={handleDelete}>Delete Comment</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Details


