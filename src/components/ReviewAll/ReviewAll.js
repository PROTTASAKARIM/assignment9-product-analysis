import useBookReviews from '../../hooks/useBookReview';
import Review from '../Review/Review';

const ReviewAll = () => {
    const [reviews, setReview] = useBookReviews();
    return (
        <div className='grid grid-cols-3 gap-5 m-5'>
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