import React, { useEffect, useState } from 'react';
import './Home.css';
import image from '../../images/41gHG-a2OEL._SX331_BO1,204,203,200_.jpg';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (

        <div>
            <div className='home-style'>
                <div className='book-details'>
                    <h1 className='book-details-header'>The Fellowship Of The Ring</h1>
                    <p className='book-details-paragraph'>The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.</p>
                </div>
                <div className='m-20'>
                    <img src={image} alt="" />
                </div>
            </div>
            <h1>Reviews about this book</h1>
            <div className='review-style'>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>

            <Link to="/review"><button>See All</button></Link>
        </div>
    );
};

export default Home;