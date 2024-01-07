import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'service/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getDataReviews = async () => {
      try {
        const dataReviews = await getReviews(movieId);
        setReviews(dataReviews);
      } catch (error) {
        console.error(error.message);
      }
    };

    getDataReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.length === 0 && <p>We don`t have any reviews for this movie.</p>}

      {reviews.length > 0 &&
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
