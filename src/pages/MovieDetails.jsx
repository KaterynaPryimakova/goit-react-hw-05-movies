import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'service/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [posterPath, setPosterPath] = useState('');
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [voteAverage, setVoteAverage] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');
  const location = useLocation();

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const movieData = await getMovieDetails(movieId);

        if (!movieData) return;

        const {
          poster_path,
          title,
          release_date,
          vote_average,
          overview,
          genres,
        } = movieData;

        const imgSrc = `https://image.tmdb.org/t/p/w300${poster_path}`;
        const votePercent = Math.floor(vote_average * 10);
        const releaseYear = release_date.split('-')[0];
        const genresNames = genres.map(genre => genre.name).join(' ');

        setPosterPath(imgSrc);
        setTitle(title);
        setReleaseDate(releaseYear);
        setVoteAverage(votePercent);
        setOverview(overview);
        setGenres(genresNames);
      } catch (error) {
        console.error(error.message);
      }
    };

    getMovieData();
  }, [movieId]);

  return (
    <div>
      <Link to={location.state.from}>Go back</Link>

      <div>
        <img src={posterPath} alt={title} />
        <h2>
          {title}({releaseDate})
        </h2>
        <p>User score: {voteAverage}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};
export default MovieDetails;
