import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <div style={{ backgroundColor: 'green' }}>
      Now showing movie with id - {movieId}
    </div>
  );
};
export default MovieDetails;
