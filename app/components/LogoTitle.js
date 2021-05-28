import React from 'react';
import { Image } from 'react-native';
import imageSrc from '../images/tmdb.png';

const LogoTitle = () => (
  <Image style={{ width: 143, height: 35 }} source={imageSrc} />
);

export default LogoTitle;
