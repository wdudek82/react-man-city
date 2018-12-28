// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import mcitylogo from '../../resources/images/logos/manchester_city_logo.png';

type Props = {
  link: string,
  linkTo: string,
};

const CityLogo = (props: Props) => {
  const template = <div>logo</div>;

  return props.link ? <Link to={props.linkTo}>Logo</Link> : template;
};

export default CityLogo;
