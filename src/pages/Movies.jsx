import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovie } from 'service/api';

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const getResponse = async () => {
      try {
        const response = await getMovie(query);
        setMoviesList(response);
      } catch (error) {
        console.error(error.message);
      }
    };
    getResponse();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    if (form.elements.query.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the name of the movie"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {moviesList.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Movies;
