import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const ReviewAll = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default ReviewAll;