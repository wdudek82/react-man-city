// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import mcitylogo from '../../resources/images/logos/manchester_city_logo.png';

type Props = {
  link: boolean,
  linkTo: string,
};

const CityLogo = (props: Props) => {
  const template = (
    <div>
      <img src={mcitylogo} alt="Manchester City Logo" />
    </div>
  );

  return props.link ? (
    <Link className="link_logo" to={props.linkTo}>
      {template}
    </Link>
  ) : (
    template
  );
};

export default CityLogo;
