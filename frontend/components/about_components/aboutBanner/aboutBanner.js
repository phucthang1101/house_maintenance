import React from 'react';
import './aboutBanner.css';
import { motion } from 'framer-motion';

const AboutBanner = () => {
  const easing = [0.6, -0.05, 0.01, 0.99];
  return (
    <React.Fragment>
    <>
      {/* <div className='about-banner-wrapper'>
        <div className='about-banner-layer'></div>
        <div className='about-titlebar-wrapper'>
          <div className='about-titlebar-main'>
            <div className='container'>
              <div className='titlebar__content'>
                <div className='entry-title-wrapper'>
                  <h1 className='entry-title'>About Us</h1>
                </div>
                <div className='breadcum-wrapper'>
                  <div className='breadcrumb-wrapper-inner'>
                    <span>
                      <a title='Go to Home.' href='/' className='home'>
                        Home
                      </a>
                    </span>
                    <span className='breadcrumb-sep'>&nbsp; / &nbsp;</span>
                    <span className='breadcrumb__current-item'>About Us </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     */}</>
     <div
        className='about-banner-wrapper'
        style={{ backgroundImage: `url(/static/images/about_banner.jpg)` }}
      >
        <div className='about-banner-layer'></div>
        <article className='about-banner-content'>
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
            <h4 className='subtitle '>About Us</h4>
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
            Reliable, GUARANTEED <br /> EXPERIENCED
            </h1>
          </motion.div>
        </article>
      </div>
   
    </React.Fragment>
  );
};

export default AboutBanner;
