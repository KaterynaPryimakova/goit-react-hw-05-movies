import { Link, useLocation } from 'react-router-dom';
import css from './AdditionalInfo.module.css';

export const AdditionalInfo = () => {
  const location = useLocation();

  return (
    <section className={css.container}>
      <h2 className={css.paragraf}>Additional information</h2>
      <ul className={css.list}>
        <li>
          <Link className={css.link} to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link className={css.link} to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
    </section>
  );
};
