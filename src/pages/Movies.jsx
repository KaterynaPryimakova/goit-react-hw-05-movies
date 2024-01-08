import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMovie } from 'service/api';

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

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
    setSearchParams({ query: form.elements.query.value } || '');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          // onChange={handleChange}
          // value={query}
          type="text"
          placeholder="Enter the name of the movie"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {moviesList.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Movies;
