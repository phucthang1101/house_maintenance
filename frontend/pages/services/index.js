import React, { useEffect, useRef } from 'react';
import Layout from '../../components/Layout';
import ServicesCard from '../../components/services_components/servicesCard/servicesCard';
import ServicesBanner from '../../components/services_components/servicesBanner/servicesBanner';
import { withRouter } from 'next/router';
import { listServices, readServices } from '../../actions/serviceAction';
import { listCategories } from '../../actions/categoryAction';

const Services = ({ router, categories, modelService }) => {
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

  const loadServiceCard = () =>
    categories &&
    categories.map((category, index) => (
      <ServicesCard key={index} category={category} number={index + 1}/>
    ));

  return (
    <React.Fragment>
      <Layout>
        <ServicesBanner />
        <div ref={controlSwitch} className='controls-switch'></div>
        {loadServiceCard()}
      </Layout>
    </React.Fragment>
  );
};

Services.getInitialProps = async () => {
  const data = await listCategories();
  
  return { categories: data };
};
export default withRouter(Services);
