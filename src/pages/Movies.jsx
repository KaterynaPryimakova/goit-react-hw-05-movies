import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    //
  }, []);

  const handleChange = evt => {
    setSearchParams({ query: evt.currentTarget.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={query}
        type="text"
        placeholder="Enter the name of the movie"
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default Movies;
