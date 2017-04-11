// @flow

import React from 'react';

import generateImageStyle from './generateImageStyle';

import './Backdrop.css';

type Props = {
  url: string,
};

const Backdrop: (Props) => ?React.Element<*> = ({ url }: Props) => {
  if (!url) {
    return null;
  }

  return (
    <div className="backdrop" style={{ ...generateImageStyle(url, 1000) }} />
  );
};

export default Backdrop;
