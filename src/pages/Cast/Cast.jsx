import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/api';
import { makeImgSrc } from 'service/helpers';
import css from './Cast.module.css';

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
    <ul className={css.list}>
      {cast.length === 0 && <p>We don`t have cast for this movie.</p>}

      {cast.length > 0 &&
        cast.map(({ id, name, profile_path, character }) => {
          return (
            <li className={css.item} key={id}>
              <img
                className={css.image}
                src={makeImgSrc(profile_path)}
                width="160"
                alt="poster"
              />
              <p className={css.name}>{name}</p>
              <p className={css.text}>
                Character:
                <span className={css.acent}> {character}</span>
              </p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
