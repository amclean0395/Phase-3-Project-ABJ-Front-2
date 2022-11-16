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

// function ItemDetail({ itemId }) {
//     const [item, setItem] = useState(“[]“);
//     useEffect(() => {
//      fetch(http://localhost:9292/items/${itemId})
//       .then((r) => r.json())
//       .then((item) => setItem(item));
//     }, [itemId]);
//     if (!item) return <h2>Stocking Items!…</h2>;
//     return (
//      h2>{item.name}</h2>
//        <img className= “itemsImage” src= {item.image} alt= “oneItem”>
//       <p>Description: {item.description}</p>
//       <p>Price: {item.price} </p>
//       <h4>Reviews</h4>
//        {item.users.map((user) => (
//        <div>
//         <h5>{user.username}</h5>
//         <p>Location: {user.location}</p>
//         <p>Sexy PFP:
//             <img src= “user.image” className= “userPic” alt”sup” />
//          </p>
//        </div>
//       ))}
//       {item.reviews.map((review) => (
//        <div>
//         <h5>{review.user.name}</h5>
//         <p>Rating: {review.star_rating}</p>
//         <p>Comment: {review.comment}</p>
//        </div>
//       ))}
//      </div>
//     );
//    }


