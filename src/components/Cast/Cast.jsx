import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCastData = async () => {
      try {
        const castData = await getCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error(error.message);
      }
    };

    getCastData();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, profile_path, character }) => {
        const imgSrc = `https://image.tmdb.org/t/p/w500${profile_path}`;
        return (
          <li key={id}>
            <img src={imgSrc} alt={name} width="120" />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
