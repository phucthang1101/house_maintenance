import React, { useEffect, useRef } from 'react';
import './aboutServices.css';
import { Fade } from 'react-reveal';

const AboutServices = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className='about-services-wrapper about-services'>
          <div className='about-services__bg-layer'></div>
          <div className='services-introduction container'>
            <div className='row mx-0'>
              <div className='introduction-content__heading col-12 col-md-5'>
                <div className='heading-wrapper'>
                  <h4 className='heading-subtitle'>WORKING WITH EXCELLENT</h4>
                  <h2 className='heading-title'>Residential Services</h2>
                </div>
              </div>
              <div className='introduction-content__body col-12 col-md-7'>
                <p>
                  D.C Finisher has 15+ years of experience of providing wide area
                  of specialty services works listed below.
                </p>
              </div>
            </div>
          </div>
          <div className=' '>
            <div className='row mx-0'>
              <Fade left>
                <div className='col-12 col-md-3 service house-services services-column-border'>
                  <div className='house-services__content'>
                    <div className='house-services__icon-wrapper'>
                      <svg viewBox='0 0 24 24' role='presentation'>
                        <path d='M23.813 12.897l-11.517-8.9a0.49 0.49 0 0 0-0.593 0l-4.345 3.358v-1.075a0.476 0.476 0 0 0-0.479-0.475h-3.198a0.479 0.479 0 0 0-0.483 0.475v4.289l-3.016 2.329a0.475 0.475 0 0 0-0.087 0.661l1.918 2.541a0.489 0.489 0 0 0 0.327 0.186a0.475 0.475 0 0 0 0.361-0.099l0.497-0.399v3.84a0.479 0.479 0 0 0 0.483 0.475h16.638a0.479 0.479 0 0 0 0.483-0.475a0.224 0.224 0 0 0-0.007-0.053a0.257 0.257 0 0 0 0.007-0.053v-3.734l0.497 0.399a0.487 0.487 0 0 0 0.3 0.103a0.307 0.307 0 0 0 0.061-0.004a0.472 0.472 0 0 0 0.323-0.186l1.922-2.541A0.472 0.472-512.008 0 0 23.813 12.897Zm-19.654-6.138h2.241v1.337l-2.241 1.728v-3.065Zm-0.023 8.285l1.147-0.911v5.018h-1.125v-3.969A0.397 0.397-512.008 0 0 4.137 15.043Zm9.888 2.089v0.509h-4.099v-0.509h4.099Zm-3.525-1.018l0.266-0.509h2.439l0.247 0.509h-2.951Zm-0.061 2.545h3.073v0.49h-3.073v-0.49Zm4.099 0.49v-0.49a0.507 0.507 0 0 0 0.513-0.509v-1.626c0-0.023-0.023-0.042-0.023-0.065v-0.019a0.099 0.099 0 0 0-0.042-0.061v-0.019c-0.019-0.023-0.038-0.061-0.061-0.083l-0.448-0.448l-0.475-0.935a0.524 0.524 0 0 0-0.448-0.285h-3.077a0.489 0.489 0 0 0-0.448 0.285l-0.471 0.935l-0.452 0.448a0.25 0.25 0 0 0-0.061 0.083a0.02 0.02 0 0 1-0.023 0.019a0.579 0.579 0 0 1-0.042 0.061a0.047 0.047 0 0 1-0.019 0.042c0 0.019-0.019 0.042-0.019 0.061v1.607a0.505 0.505 0 0 0 0.513 0.509v0.49h-3.21v-5.052h11.51v5.052h-3.217Zm-8.011-6.006l5.473-4.345l5.473 4.345h-10.948Zm13.314 2.036v3.969h-1.125v-5.018l1.147 0.911A0.397 0.397-512.008 0 0 19.841 15.18Zm1.671-0.045l-9.212-7.32a0.491 0.491 0 0 0-0.6 0l-9.215 7.32l-1.337-1.774l10.852-8.384l10.852 8.384Z'></path>
                      </svg>{' '}
                    </div>
                    <div className='house-services__title'>
                      <h2>By Room</h2>
                    </div>
                    <div className='house-services__description'>
                      <p>
                        {' '}
                        Attic, Bathroom, Bedroom, Basement, Living & Dining
                        Room, Garage.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-3 service house-services services-column-border'>
                  <div className='house-services__content'>
                    <div className='house-services__icon-wrapper'>
                      <svg
                        viewBox='0 0 24 24'
                        role='presentation'
                        style={{ fontSize: '22px' }}
                      >
                        <path d='M23.465 0H0.541a0.537 0.537 0 0 0-0.537 0.537h0v22.92a0.539 0.539 0 0 0 0.533 0.543h22.922a0.537 0.537 0 0 0 0.537-0.537h0v-22.926a0.529 0.529 0 0 0-0.519-0.537h-0.013Zm-0.543 22.658a0.266 0.266 0 0 1-0.263 0.263h-21.314a0.265 0.265 0 0 1-0.262-0.263v-21.314a0.265 0.265 0 0 1 0.262-0.263h21.318a0.266 0.266 0 0 1 0.263 0.263v21.314h-0.006Zm-12.525-20.252H2.947a0.538 0.538 0 0 0-0.537 0.537h0v18.109a0.536 0.536 0 0 0 0.536 0.537h7.452a0.537 0.537 0 0 0 0.537-0.537h0v-18.109a0.53 0.53 0 0 0-0.529-0.537h-0.008Zm-0.537 17.847a0.266 0.266 0 0 1-0.263 0.263H3.753a0.266 0.266 0 0 1-0.263-0.263v-10.657a0.266 0.266 0 0 1 0.263-0.263h5.845a0.266 0.266 0 0 1 0.263 0.263v10.657Zm0-12.263a0.266 0.266 0 0 1-0.263 0.263H3.753a0.266 0.266 0 0 1-0.263-0.263v-4.24a0.258 0.258 0 0 1 0.255-0.263h5.853a0.266 0.266 0 0 1 0.263 0.263v4.24Zm11.2-5.583H13.609a0.537 0.537 0 0 0-0.537 0.537h0v18.109a0.535 0.535 0 0 0 0.536 0.537h7.452a0.538 0.538 0 0 0 0.537-0.537h0v-18.109a0.536 0.536 0 0 0-0.536-0.537h0Zm-0.543 17.847a0.266 0.266 0 0 1-0.263 0.263H14.409a0.266 0.266 0 0 1-0.263-0.263v-10.657a0.266 0.266 0 0 1 0.263-0.263h5.845a0.266 0.266 0 0 1 0.263 0.263v10.657Zm0-12.263a0.266 0.266 0 0 1-0.263 0.263H14.409a0.266 0.266 0 0 1-0.263-0.263v-4.24a0.266 0.266 0 0 1 0.263-0.263h5.845a0.266 0.266 0 0 1 0.263 0.263v4.24Zm-1.869 8.514a0.537 0.537 0 0 0-0.537 0.537h0v0.8a0.266 0.266 0 0 1-0.263 0.263h-0.8a0.537 0.537 0 0 0 0 1.074h1.607a0.537 0.537 0 0 0 0.537-0.537h0v-1.606A0.542 0.542-529.149 0 0 18.649 16.504Z'></path>
                      </svg>
                    </div>
                    <div className='house-services__title'>
                      <h2>By Area</h2>
                    </div>
                    <div className='house-services__description'>
                      <p>
                        {' '}
                        Ceilings, Door Services, Exterior, Floors, Windows,
                        Drywall/Walls.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className='col-12 col-md-3 service house-services services-column-border'>
                  <div className='house-services__content'>
                    <div className='house-services__icon-wrapper'>
                      <i className='themifyicon ti-paint-roller'></i>
                    </div>
                    <div className='house-services__title'>
                      <h2>By Services</h2>
                    </div>
                    <div className='house-services__description'>
                      <p>
                        {' '}
                        Carpentry, Electrical, Painting, Plumbing, Remodeling,
                        Maintenance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-3 service house-services services-more-detail'>
                  <div className='house-services__content'>
                    <div className='house-services__icon-wrapper'>
                      <i className='ti-arrow-circle-right'></i>
                    </div>
                    <div className='house-services__title'>
                      <h2>More Detail</h2>
                    </div>
                    <div className='house-services__description'>
                      <p>
                        {' '}
                        We have experience in home maintenance any surface from
                        new construct.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};

export default AboutServices;
