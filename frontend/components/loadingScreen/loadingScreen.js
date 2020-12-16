import React, { useEffect, useState } from 'react';
import './loadingScreen.css';

const LoadingScreen = ({ loading }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
 // console.log('loading: ', loading);
  if (loading === -1) {
    return (
      <>
        <div
          className={`loader_bg noscroll-active ${
            isLoading ? 'transition-slide-enter' : 'transition-slide-exit'
          }`}
        >
          <div className={`loader  ${isLoading ? '' : 'to-hide'}`}></div>
        </div>
        <div
          className={`loader_bg2 noscroll-active ${
            isLoading ? 'transition-slide-enter2' : 'transition-slide-exit2'
          }`}
        >
          <div className={`loader  ${isLoading ? '' : 'to-hide'}`}></div>
        </div>
      </>
    );
  } else {
    return (
        <>
        <div
          className={`loader_bg noscroll-active ${
            loading ? 'in' : 'out'
          }`}
        >
          <div className={`loader  ${loading ? '' : 'to-hide'}`}></div>
        </div>
        <div
          className={`loader_bg2 noscroll-active ${
            loading ? 'in2' : 'out2'
          }`}
        >
          <div className={`loader  ${loading ? '' : 'to-hide'}`}></div>
        </div>
      </>
    );
  }
};

export default LoadingScreen;
