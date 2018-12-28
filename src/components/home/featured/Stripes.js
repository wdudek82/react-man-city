// @flow
import * as React from 'react';
import _ from 'lodash-uuid';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

type State = {
  stripes: Array<Object>,
};

class Stripes extends React.Component<{}, State> {
  state = {
    stripes: [
      { background: '#98c5e9', left: 120, rotate: 25, top: -260, delay: 0 },
      { background: '#ffffff', left: 360, rotate: 25, top: -397, delay: 200 },
      { background: '#98c5e9', left: 600, rotate: 25, top: -498, delay: 400 },
    ],
  };

  showStripes = (): React.Node => {
    return this.state.stripes.map((stripe, i) => (
      <Animate
        key={_.uuid()}
        show={true}
        start={{
          background: '#fff',
          opacity: 0,
          left: 0,
          rotate: 0,
          top: 0,
        }}
        enter={{
          background: [stripe.background],
          opacity: [1],
          left: [stripe.left],
          rotate: [stripe.rotate],
          top: [stripe.top],
          timing: { delay: stripe.delay, duration: 200, ease: easePolyOut },
        }}
      >
        {({ opacity, left, top, rotate, background }) => (
          <div
            className="stripe"
            style={{
              background,
              opacity,
              transform: `rotate(${rotate}deg) translate(${left}px, ${top}px`,
            }}
          />
        )}
      </Animate>
    ));
  };

  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;
