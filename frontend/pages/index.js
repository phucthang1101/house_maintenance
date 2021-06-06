import React, { useEffect, useRef } from 'react';
import MainSlider from '../components/index_components/mainSlider/mainSlider';
import Layout from '../components/Layout';
import Service from '../components/index_components/services/service';
import Projects from '../components/index_components/projects/projects';
import About from '../components/index_components/criteria_and_about/about';
import Testimonial from '../components/index_components/testimonial_and_request/testimonial';

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

  return (
    <React.Fragment>
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
