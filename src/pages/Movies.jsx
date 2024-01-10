import { useSearchParams } from 'react-router-dom';
import { getMovie } from 'service/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

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
      <MoviesList getDataMovie={() => getMovie(query)} />
    </>
  );
};

export default Movies;
