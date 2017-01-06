// @flow

import generateImageName from './generateImageName'

const generateImageStyle = (url: string, width = 370): { backgroundImage: string } =>
  ({ backgroundImage: `url(${generateImageName(url, width) })` })

export default generateImageStyle;
