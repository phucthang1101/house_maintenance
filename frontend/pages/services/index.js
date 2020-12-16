import React, { useEffect, useRef } from 'react';
import Layout from '../../components/Layout';
import ServicesCard from '../../components/services_components/servicesCard/servicesCard';
import ServicesBanner from '../../components/services_components/servicesBanner/servicesBanner';


const Services = () => {
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
        <ServicesBanner />
        <div ref={controlSwitch} className='controls-switch'></div>
        <ServicesCard number={1}/>
        <ServicesCard number={2}/>
        <ServicesCard number={3}/>
      </Layout>
    </React.Fragment>
  );
};

export default Services;
