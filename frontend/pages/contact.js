import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

import ContactBanner from '../components/contact_components/contactBanner';
import ContactMain from '../components/contact_components/contactMain';

const contact = () => {
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
        <ContactBanner />
        <div ref={controlSwitch} className='controls-switch'></div>
        <ContactMain />
      </Layout>
    </React.Fragment>
  );
};

export default contact;
