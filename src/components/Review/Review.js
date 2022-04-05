import React from 'react';
import './Review.css'

const Review = (props) => {

    const { id, name, img, rating, review } = props.review;
    console.log(props);
    return (
        <div >
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{review}</p>
        </div>
    );
};

export default Review;