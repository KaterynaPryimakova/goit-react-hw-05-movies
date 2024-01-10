import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'service/api';

const MovieDetails = () => {
  const location = useLocation();
  const backLinckLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  const [posterPath, setPosterPath] = useState('');
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [voteAverage, setVoteAverage] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');

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
      <Link to={backLinckLocationRef.current}>Go back</Link>

      <section>
        <img src={posterPath} alt={title} />
        <h1>
          {title}({releaseDate})
        </h1>
        <p>User score: {voteAverage}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres}</p>
      </section>

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

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
