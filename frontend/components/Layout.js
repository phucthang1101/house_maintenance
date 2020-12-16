import Header from './header/Header';
//import SimpleBar from 'simplebar-react';
// import React, { useEffect, useRef } from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
// const scrollbarNodeRef = React.createRef();
// cannot use SimpleBar in the first stage because Index Page have no side-effect yet. U can try it later when use SSR
import Footer from './footer/footer';
import LoadingScreen from '../components/loadingScreen/loadingScreen';
import Head from 'next/head';

const Layout = (props) => {
  //  console.log('layout')
  return (
    <React.Fragment>
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          href={'/_next/static/css/styles.chunk.css?v=' + Date.now()}
        />
      </Head>
      <Header />

      {props.children}

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
