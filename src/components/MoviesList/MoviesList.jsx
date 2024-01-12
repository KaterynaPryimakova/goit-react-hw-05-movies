import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { makeImgSrc } from 'service/helpers';
import css from './MoviesList.module.css';

export const MoviesList = ({ getDataMovie }) => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const dataMovie = await getDataMovie();
        setMovies(dataMovie);
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      }
    };
    fetchMovies();
  }, [getDataMovie]);

  return (
    <ul className={css.list}>
      {movies?.map(({ id, title, poster_path }) => (
        <li key={id} className={css.item}>
          <Link
            className={css.link}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            <img
              className={css.image}
              src={makeImgSrc(poster_path)}
              alt="movie-poster"
              width="220"
            />
            <p className={css.title}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
