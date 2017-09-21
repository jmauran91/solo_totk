import React from 'react';

const Review = (props) => {
  return(
    <div className="review-text">
    <h5 className="review_rating">Review rating: {props.rating}</h5>
    <h5 className="review_body">Review body: {props.body}</h5>
    <a className="review_edit" href={'/releases/' + props.releaseId
              + '/reviews/' + (parseInt(props.id)+8) + '/edit'}>Edit this review</a>
    <br />
    </div>
  )
}

export default Review;
