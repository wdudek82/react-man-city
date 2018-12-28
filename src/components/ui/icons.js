// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import mcitylogo from '../../resources/images/logos/manchester_city_logo.png';

type Props = {
  link: boolean,
  linkTo: string,
  width: string,
  height: string,
};

const CityLogo = (props: Props) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${mcitylogo}) no-repeat`,
      }}
    />
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
