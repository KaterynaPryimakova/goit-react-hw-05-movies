import React from 'react';
import { getTrending } from 'service/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  return (
    <>
      <div>
        <h2>Trending today</h2>
        <ul>
          <MoviesList getDataMovie={() => getTrending()} />
        </ul>
      </div>
    </>
  );
};
export default Home;
