import { useEffect, useState } from "react";
import {  getReviewsByIdAPI } from "../../servises/api";

const Reviews = ({id}) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviewsByIdAPI(id).then((data) => {
      console.log(data)
      setReviews(data)
    })
    .catch(err => console.log(err))
  }, [])

  console.log(reviews)
  return (
    <>
      {reviews?.length === 0 ? (
        <p>We don`t have any reviews for this time</p>
      ) : (
          <ul>
            {reviews.map(review => {
              return (
                <li key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p>{review.content}</p>
                </li>
              )
           })}
          </ul>
      )}
    </>
  )
}
 
export default Reviews;