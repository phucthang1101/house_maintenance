import React from 'react';
import './contactMain.css';
import { motion } from 'framer-motion';

const ContactBanner = () => {
  const easing = [0.6, -0.05, 0.01, 0.99];
  return (
    <React.Fragment>
      <div
        className='contact-banner-wrapper'
        style={{ backgroundImage: `url(/static/images/main_contact_01.jpg)` }}
      >
        <div className='contact-banner-layer'></div>
        <article className='contact-banner-content'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                y: 100,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: 2,
                  ease: easing,
                },
              },
            }}
          >
            <h4 className='subtitle '>Contact Us</h4>
          </motion.div>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                y: 100,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: 2,
                  ease: easing,
                },
              },
            }}
          >
            <h1 className='title '>
              We would like <br /> to hear from you
            </h1>
          </motion.div>
        </article>
      </div>
     </React.Fragment>
  );
};

export default ContactBanner;
