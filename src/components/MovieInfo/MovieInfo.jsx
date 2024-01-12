import css from './MovieInfo.module.css';

export const MovieInfo = ({
  imgSrc,
  title,
  releaseDate,
  votePercent,
  overview,
  genres,
}) => {
  return (
    <section className={css.movieInfo}>
      <img className={css.poster} src={imgSrc} alt={title} width="300" />
      <div className={css.textWrap}>
        <h1 className={css.title}>
          {title}({releaseDate})
        </h1>
        <p className={css.text}>User score: {votePercent}%</p>
        <h2 className={css.paragraf}>Overview</h2>
        <p className={css.text}>{overview}</p>
        <h2 className={css.paragraf}>Genres</h2>
        <p className={css.text}>{genres}</p>
      </div>
    </section>
  );
};
