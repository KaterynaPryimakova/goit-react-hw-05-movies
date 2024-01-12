import React from 'react';
import { getTrending } from 'service/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Home.module.css';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  return (
    <div>
      <Loader className={css.loader} />
      <h2 className={css.title}>Trending today</h2>

      <MoviesList getDataMovie={() => getTrending()} />
    </div>
  );
};
export default Home;
