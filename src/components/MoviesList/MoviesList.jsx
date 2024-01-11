import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const MoviesList = ({ getDataMovie }) => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getDataMovie();
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      }
    };
    fetchMovies();
  }, [getDataMovie]);

  return (
    <ul>
      {movies?.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
