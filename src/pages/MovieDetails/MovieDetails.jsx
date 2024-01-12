import React from 'react';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'service/api';
import { makeImgSrc } from 'service/helpers';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';
import { ReactComponent as ArrowIcon } from '../../icons/arrow-left.svg';
import { Report } from 'notiflix/build/notiflix-report-aio';

const MovieDetails = () => {
  const location = useLocation();
  const backLinckLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        if (!movieData) return;
        setMovieDetails(movieData);
      } catch (error) {
        Report.failure('Error', `${error.message}`, 'Okay');
      }
    };
    getMovieData();
  }, [movieId]);

  const imgSrc = makeImgSrc(movieDetails.poster_path);
  console.log(imgSrc);
  const votePercent = Math.floor(movieDetails.vote_average * 10);
  const releaseYear = movieDetails.release_date?.split('-')[0];
  const genresNames = movieDetails.genres?.map(genre => genre.name).join(' ');

  return (
    <div>
      <Link to={backLinckLocationRef.current} className={css.goBack}>
        <ArrowIcon className={css.icon} />
        Go back
      </Link>

      <MovieInfo
        imgSrc={imgSrc}
        title={movieDetails.title}
        releaseDate={releaseYear}
        votePercent={votePercent}
        overview={movieDetails.overview}
        genres={genresNames}
      />

      <AdditionalInfo />

      <Suspense fallback={<Loader className={css.loader} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
