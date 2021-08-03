import React, { useEffect, useRef } from 'react';
import MainSlider from '../components/index_components/mainSlider/mainSlider';
import Layout from '../components/Layout';
import Service from '../components/index_components/services/service';
import Projects from '../components/index_components/projects/projects';
import About from '../components/index_components/criteria_and_about/about';
import Testimonial from '../components/index_components/testimonial_and_request/testimonial';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import Head from 'next/head';

const index = () => {
  const controlSwitch = useRef();
  // console.log('index')

  const changeMenuBg = () => {
    const position = window.pageYOffset;
    const { offsetTop } = controlSwitch.current;
    if (position > offsetTop) {
      document
        .querySelector('.site-header__controls')
        .classList.add('has-background');
    } else {
      document
        .querySelector('.site-header__controls')
        .classList.remove('has-background');
    }
    // console.log('offsetTop: ', offsetTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeMenuBg, { passive: true });

    return () => {
      window.removeEventListener('scroll', changeMenuBg);
    };
  }, []);

  const head = () => (
    <Head>
      <title>D.C Finisher | Handyman Service | House Maintenance</title>
      <meta
        name='description'
        content='Looking for handyman services in Windsor? D.C Finisher provides various types of renovations and repair jobs. Get started by requesting a service!'
      />
      <meta
        name='keywords'
        content='Handyman Service, House Maintenance, Painting, Plumbing, Bathroom, Door/Windows, Drywall,..'
      />
      <link rel='canonical' href={`${DOMAIN}`} />
      <meta
        property='og:title'
        content='D.C Finisher | Handyman Service | House Maintenance'
      />
      <meta
        name='og:description'
        content='Looking for handyman services in Windsor? D.C Finisher provides various types of renovations and repair jobs. Get started by requesting a service!'
      />
      <meta name='og:type' content='website' />
      <meta name='og:url' content={`${DOMAIN}`} />
      <meta name='og:site_name' content='D.C Finisher | Handyman Service | House Maintenance' />

      {/* social-media */}
      <meta name='og:image' content={`${DOMAIN}/static/images/freeLogo3-removebg.png`} />
      <meta
        name='og:image:secure_url'
        content={`${DOMAIN}/static/images/freeLogo3-removebg.png`}
      />
      <meta name='og:image:type' content='image/png' />
      <meta name='fb:app_id' content={`${FB_APP_ID}`} />
    </Head>
  );

  return (
    <React.Fragment>
    {head()}
      <Layout>
        
        <MainSlider />
        <div ref={controlSwitch} className='controls-switch'></div>
        <About />
        <Service />
       
        <Testimonial />
      </Layout>
    </React.Fragment>
  );
};

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return { props: {} };
}
export default index;
