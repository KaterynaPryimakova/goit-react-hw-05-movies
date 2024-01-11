export const makeImgSrc = movieData => {
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  const imgSrc = movieData
    ? `https://image.tmdb.org/t/p/w300${movieData}`
    : defaultImg;
  return imgSrc;
};
