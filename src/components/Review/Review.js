import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';
import './Review.css';


const Review = (props) => {

    const { id, name, img, rating, review } = props.review;
    console.log(props);
    return (
        <div className='bg-slate-200 p-3 rounded'>
            <img className='rounded' src={img} alt="" />
            <h4 className='font-semibold text-lg m-3'>{name}</h4>
            <StarRatings rating={rating}></StarRatings>
            <p className='m-3 p-3'>{review}</p>
        </div>
    );
};

export default Review;