import image from '../../images/41gHG-a2OEL._SX331_BO1,204,203,200_.jpg';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';
import useBookReviews from '../../hooks/useBookReview';

const Home = () => {
    const [reviews, setReview] = useBookReviews();

    return (

        <div>
            <div className='flex m-6'>
                <div className='bg-slate-200 rounded'>
                    <h1 className='font-semibold text-3xl m-6 p-6'>The Fellowship Of The Ring</h1>
                    <p className='p-6 m-6'>The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.</p>
                </div>
                <div className='m-5'>
                    <img className='h-screen w-screen' src={image} alt="" />
                </div>
            </div>
            <h1 className='font-semibold text-3xl'>Reviews about this book</h1>
            <div className='grid grid-cols-3 gap-5 m-5'>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>

            <Link to="/review"><button className='rounded-lg bg-slate-800 text-white p-3 m-3'>See All</button></Link>
        </div>
    );
};

export default Home;