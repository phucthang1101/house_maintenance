import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import AboutBanner from '../components/about_components/aboutBanner/aboutBanner';
import AboutMainContent from '../components/about_components/aboutMainContent/aboutMainContent';
import AboutStragety from '../components/about_components/aboutStragety/aboutStragety';
import AboutServices from '../components/about_components/aboutServices/aboutServices';
import AboutFollowSteps from '../components/about_components/aboutFollowSteps/aboutFollowSteps';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import Head from 'next/head';


const about = () => {
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
      <title>About Us | D.C Finisher Home Improvement Professionals</title>
      <meta
        name='description'
        content='Learn about D.C Finisher. Our experienced, our vision, motto and fully insured technicians. We’re so confident that we guarantee our workmanship.'
      />
      <meta
        name='keywords'
        content='Handyman Service, House Maintenance, Painting, Plumbing, Bathroom, Door/Windows, Drywall,..'
      />
      <link rel='canonical' href={`${DOMAIN}`} />
      <meta
        property='og:title'
        content='About Us | D.C Finisher Home Improvement Professionals'
      />
      <meta
        name='og:description'
        content='Learn about D.C Finisher. Our experienced, our vision, motto and fully insured technicians. We’re so confident that we guarantee our workmanship.'
      />
      <meta name='og:type' content='website' />
      <meta name='og:url' content={`${DOMAIN}`} />
      <meta name='og:site_name' content='About Us | D.C Finisher Home Improvement Professionals' />

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
        <AboutBanner />
        <div ref={controlSwitch} className='controls-switch'></div>
        <AboutMainContent />
        <AboutStragety />
        <AboutServices />
        <AboutFollowSteps />
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
export default about;
