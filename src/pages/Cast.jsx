import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/api';
import { makeImgSrc } from 'service/helpers';

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
      {cast.length === 0 && <p>We don`t have cast for this movie.</p>}

      {cast.length > 0 &&
        cast.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id}>
              <img src={makeImgSrc(profile_path)} width="100" alt="poster" />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
