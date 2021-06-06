import React from 'react';
import './servicesBanner.css';
import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';
import { motion } from 'framer-motion';
import renderHTML from 'react-render-html';

const ServicesBanner = (props) => {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp2 = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.7,
        ease: easing,
      },
    },
  };
  let randomBackground =
    'https://www.stortford-interiors.com/wp-content/uploads/2016/06/services-banner.jpg';
  return (
    <React.Fragment>
      <div
        className='services-banner__wrapper'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${props.service ? props.service.photo : randomBackground})`,
        }}
      >
        <div className='services-banner-layer'></div>
        <article className='services-banner-content'>
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
                  delay: 1.8,
                  ease: easing,
                },
              },
            }}
          >
            <h4 className='subtitle '>
              {props.service ? props.service.name : 'Service'}
            </h4>
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
                  delay: 1.8,
                  ease: easing,
                },
              },
            }}
          >
            <h1 className='title '>
           {props.service ? renderHTML(props.service.slogan) : (<>Reliable, Trusted <br/> Professional Services</>)}
            </h1>
          </motion.div>
          {/* <Fade bottom ssrFadeout ssrReveal={true}>
  <h1 className='testing'>
    Your content goes here
  </h1>
</Fade> */}
        </article>
      </div>
    </React.Fragment>
  );
};
export default ServicesBanner;
