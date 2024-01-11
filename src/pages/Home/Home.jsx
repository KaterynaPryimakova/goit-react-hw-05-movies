import React from 'react';
import { getTrending } from 'service/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Home.module.css';

const Home = () => {
  return (
    <div>
      <h2 className={css.title}>Trending today</h2>
      <ul>
        <MoviesList getDataMovie={() => getTrending()} />
      </ul>
    </div>
  );
};
export default Home;
