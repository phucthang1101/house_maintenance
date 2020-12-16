import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import React from 'react';
import LoadingScreen from '../components/loadingScreen/loadingScreen';
import { AnimatePresence } from 'framer-motion';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(-1);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (loading === -1 || loading === 0) {
      // console.log('setIsshow true');
      setIsShown(true);
    }
    //   else{
    //     console.log('setIsshow false')
    //     setTimeout(() => {
    //         setIsShown(false);
    //       }, 500);
    //   }
  }, [loading]);

  useEffect(() => {
    const start = (url) => {
  //    console.log('start: ',url)
      setTimeout(() => {
        setIsShown(false);
      }, 300);

      setLoading(1);
    };
    const end = (url) => {
   //   console.log('end: ',url)
      const els = document.querySelectorAll(
        'link[href*="/_next/static/css/styles.chunk.css"]'
      );
      const timestamp = new Date().valueOf();
      els[0].href = '/_next/static/css/styles.chunk.css?v=' + timestamp;
      
      setTimeout(() => {
        setLoading(0);
      }, 1000);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    // return () => {
    //   Router.events.off('routeChangeStart', start);
    //   Router.events.off('routeChangeComplete', end);
    //   Router.events.off('routeChangeError', end);
    // };
  }, []);
  //  console.log(router.pathname);
  return (
    <>
      {/* <AnimatePresence exitBeforeEnter> */}
      <LoadingScreen loading={loading} />
      {isShown && <Component {...pageProps} />}
      {/* </AnimatePresence> */}
    </>
  );
}

// export default class MyApp extends App {

//     render() {
//       const { Component, pageProps } = this.props
//       console.log('Myapp')
//       return (
//         <Container>
//           <PageTransition timeout={500} classNames={`transition-${pageProps.transitionType}`}>
//             <Component {...pageProps} />
//           </PageTransition>
//           <style jsx global>{`
//             .transition-fade-enter {
//               opacity: 0;
//             }
//             .transition-fade-enter-active {
//               opacity: 1;
//               transition: opacity 500ms
//             }
//             .transition-fade-exit {
//               opacity: 1;
//             }
//             .transition-fade-exit-active {
//               opacity: 0;
//               transition: opacity 500ms
//             }
//             .transition-slide-enter {
//               transform: translate3d(-100%, 0, 0);
//             }
//             .transition-slide-enter-active {
//               transform: translate3d(0, 0, 0);
//               transition: transform 500ms ease-out;
//             }
//             .transition-slide-exit {
//               transform: translate3d(0, 0, 0);
//             }
//             .transition-slide-exit-active {
//               transform: translate3d(100%, 0, 0);
//               transition: transform 500ms ease-in;
//             }
//           `}</style>
//         </Container>
//       )
//     }
//   }

// import Router from 'next/router';
// import Link from 'next/link';
// import Head from 'next/head';
// import NProgress from 'nprogress';
// import { useEffect, useState } from 'react';

// // Router.events.on('routeChangeStart', (url) => {
// //   console.log(`Loading: ${url}`);
// //   NProgress.start();
// // });
// // Router.events.on('routeChangeComplete', () => NProgress.done());
// // Router.events.on('routeChangeError', () => NProgress.done());

// export default function App({ Component, pageProps }) {
//   const [loading, setLoading] = useState(1);

//   const start = (url) => {
//     console.log(`Loading: ${url}`);

//     setTimeout(() => {
//         NProgress.start();
//       setLoading(1);
//     }, 5000);

//     // setLoading(1);
//   };
//   const end = (url) => {
//     NProgress.done();
//     setLoading(0);
//   };

//   Router.events.on('routeChangeStart', start);
//   Router.events.on('routeChangeComplete', end);
//   Router.events.on('routeChangeError', end);

//   return (
//     <>
//       <Head>
//         {/* Import CSS for nprogress */}
//         <link
//           rel='stylesheet'
//           type='text/css'
//           href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css'
//         />
//       </Head>
//       <nav>
//         <style jsx>{`
//           a {
//             margin: 0 10px 0 0;
//           }
//         `}</style>
//         <Link href='/'>
//           <a>Home</a>
//         </Link>
//         <Link href='/about'>
//           <a>About</a>
//         </Link>
//         <Link href='/forever'>
//           <a>Forever</a>
//         </Link>
//         <a href='/non-existing'>Non Existing Page</a>
//       </nav>
//       {loading && <Component {...pageProps} />}
//     </>
//   );
// }

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
// export default MyApp
