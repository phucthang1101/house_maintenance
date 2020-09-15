import Header from './header/Header';
//import SimpleBar from 'simplebar-react';
// import React, { useEffect, useRef } from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
// const scrollbarNodeRef = React.createRef();
// cannot use SimpleBar in the first stage because Index Page have no side-effect yet. U can try it later when use SSR

const Layout = (props) => {
  return (
    <React.Fragment>
     
        <Header />
        {props.children}
     
    </React.Fragment>
  );
};

export default Layout;
