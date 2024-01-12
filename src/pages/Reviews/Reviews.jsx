import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'service/api';
import css from './Reviews.module.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getDataReviews = async () => {
      try {
        const dataReviews = await getReviews(movieId);
        setReviews(dataReviews);
      } catch (error) {
        Report.failure('Error', `${error.message}`, 'Okay');
      }
    };

    getDataReviews();
  }, [movieId]);

  return (
    <ul className={css.list}>
      {reviews.length === 0 && <p>We don`t have any reviews for this movie.</p>}

      {reviews.length > 0 &&
        reviews.map(({ id, author, content }) => (
          <li className={css.item} key={id}>
            <h4 className={css.paragraf}>{author}</h4>
            <p className={css.text}>{content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
