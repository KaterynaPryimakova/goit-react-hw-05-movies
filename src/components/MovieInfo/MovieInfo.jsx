export const MovieInfo = ({
  posterPath,
  title,
  releaseDate,
  votePercent,
  overview,
  genres,
}) => {
  return (
    <section>
      <div>
        <img src={posterPath} alt={title} width="300" />
      </div>
      <h1>
        {title}({releaseDate})
      </h1>
      <p>User score: {votePercent}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genres}</p>
    </section>
  );
};
