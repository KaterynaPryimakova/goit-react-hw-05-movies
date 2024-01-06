import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'service/api';

const TrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trendingMovies = await getTrending();
        console.log(trendingMovies);
        setTrendingMovies(trendingMovies);
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      }
    };

    fetchTrending();
  }, []);

  return (
    <ul>
      {trendingMovies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default TrendingList;
