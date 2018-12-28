// @flow
import * as React from 'react';
import Header from '../components/Header_Footer/Header';
import Footer from '../components/Header_Footer/Footer';

type Props = {
  children: React.Node,
};

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
