import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [posterPath, setPosterPath] = useState('');
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [voteAverage, setVoteAverage] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');

  useEffect(() => {
    const getMovieData = async () => {
      const {
        poster_path,
        title,
        release_date,
        vote_average,
        overview,
        genres,
      } = await getMovieDetails(movieId);

      //   const {
      //     poster_path,
      //     title,
      //     release_date,
      //     vote_average,
      //     overview,
      //     genres,
      //   } = movieData;
      const imgSrc = `https://image.tmdb.org/t/p/w300${poster_path}`;
      const genresNames = genres.map(genre => genre.name).join(' ');

      setPosterPath(imgSrc);
      setTitle(title);
      setReleaseDate(release_date);
      setVoteAverage(vote_average);
      setOverview(overview);
      setGenres(genresNames);
    };
    getMovieData();
  }, [movieId]);

  return (
    <div>
      <img src={posterPath} alt={title} />
      <h2>
        {title}
        {releaseDate}
      </h2>
      <p>User score:{voteAverage}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
    </div>
  );
};
export default MovieDetails;
