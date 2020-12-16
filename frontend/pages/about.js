import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import AboutBanner from '../components/about_components/aboutBanner/aboutBanner';
import AboutMainContent from '../components/about_components/aboutMainContent/aboutMainContent';
import AboutStragety from '../components/about_components/aboutStragety/aboutStragety';
import AboutServices from '../components/about_components/aboutServices/aboutServices';
import AboutFollowSteps from '../components/about_components/aboutFollowSteps/aboutFollowSteps';

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
  
  return (
    <React.Fragment>
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
