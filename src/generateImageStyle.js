// @flow

import generateImageName from './generateImageName'

const generateImageStyle = (url: string, width: number = 370): { backgroundImage: string } =>
  ({ backgroundImage: `url(${generateImageName(url, width) })` })

export default generateImageStyle;
