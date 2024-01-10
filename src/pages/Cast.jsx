import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

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
          const imgSrc = `https://image.tmdb.org/t/p/w500${profile_path}`;
          return (
            <li key={id}>
              <img
                src={profile_path ? imgSrc : defaultImg}
                width={120}
                alt="poster"
              />

              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
