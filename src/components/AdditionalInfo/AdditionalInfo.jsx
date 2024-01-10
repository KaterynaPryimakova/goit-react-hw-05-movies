import { Link, useLocation } from 'react-router-dom';

export const AdditionalInfo = () => {
  const location = useLocation();

  return (
    <section>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
    </section>
  );
};
