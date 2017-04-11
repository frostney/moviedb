// @flow

const generateImageName = (url: string, width: number = 370) =>
  `https://image.tmdb.org/t/p/w${width}${url}`

export default generateImageName;
