import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route
            path="cast"
            element={
              <>
                <p>cast</p>
                <Cast />
              </>
            }
          />
          <Route path="reviews" element={<p>reviews</p>} />
        </Route>
      </Route>
    </Routes>
  );
};
