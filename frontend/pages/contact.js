import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

import ContactBanner from '../components/contact_components/contactBanner';
import ContactMain from '../components/contact_components/contactMain';

const contact = () => {

  const head = () => (
    <Head>
      <title>Request Service | Contact Methods | D.C Finisher</title>
      <meta
        name='description'
        content='Need home repairs or improvements made in your house in Windsor? Contact the professionals from D.C Finisher to schedule your service!'
      />
      <meta
        name='keywords'
        content='Handyman Service, House Maintenance, Painting, Plumbing, Bathroom, Door/Windows, Drywall,..'
      />
      <link rel='canonical' href={`${DOMAIN}`} />
      <meta
        property='og:title'
        content='Request Service | Contact Methods | D.C Finisher'
      />
      <meta
        name='og:description'
        content='Need home repairs or improvements made in your house in Windsor? Contact the professionals from D.C Finisher to schedule your service!'
      />
      <meta name='og:type' content='website' />
      <meta name='og:url' content={`${DOMAIN}`} />
      <meta name='og:site_name' content='Request Service | Contact Methods | D.C Finisher' />

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
    {head()}
      <Layout>
        <ContactBanner />
        <div ref={controlSwitch} className='controls-switch'></div>
        <ContactMain />
      </Layout>
    </React.Fragment>
  );
};

export default contact;
