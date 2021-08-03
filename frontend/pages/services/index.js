import React, { useEffect, useRef } from 'react';
import Layout from '../../components/Layout';
import ServicesCard from '../../components/services_components/servicesCard/servicesCard';
import ServicesBanner from '../../components/services_components/servicesBanner/servicesBanner';
import { withRouter } from 'next/router';
import { listServices, readServices } from '../../actions/serviceAction';
import { listCategories } from '../../actions/categoryAction';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import Head from 'next/head';

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

    const head = () => (
      <Head>
        <title>Home Repairs & Maintenance | Handyman Services  </title>
        <meta
          name='description'
          content='D.C Finisher offers a team of home improvement professionals for all your residential projects! Give us a call today to schedule service. '
        />
        <meta
          name='keywords'
          content='Handyman Service, House Maintenance, Painting, Plumbing, Bathroom, Door/Windows, Drywall,..'
        />
        <link rel='canonical' href={`${DOMAIN}`} />
        <meta
          property='og:title'
          content='Home Repairs & Maintenance | Handyman Services  '
        />
        <meta
          name='og:description'
          content='D.C Finisher offers a team of home improvement professionals for all your residential projects! Give us a call today to schedule service. '
        />
        <meta name='og:type' content='website' />
        <meta name='og:url' content={`${DOMAIN}`} />
        <meta name='og:site_name' content='Home Repairs & Maintenance | Handyman Services  ' />
  
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
