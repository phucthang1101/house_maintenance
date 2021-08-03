import React, { useEffect, useRef } from 'react';
import './aboutFollowSteps.css';
import { Fade } from 'react-reveal';

const AboutFollowStep = () => {
  return (
    <React.Fragment>
    <Fade top>
      <div className='about-follow-steps__wrapper'>
        <div className='about-follow-steps__bg-layer'></div>
        <div className='about-follow-steps container'>
          <div className='row mx-0'>
            <div className='follow-steps__content'>
              <div className='content-header__wrapper'>
                <h4 className='header-subtitle'>HOW IT WORKS</h4>
                <h2 className='header-title'>Follow 4 Easy Steps</h2>
              </div>
              <div className='header-description'>
                <p>
                Services from Mr. Handyman are trusted, reliable and professional. Please follow these steps, and request for the best service in town.
                </p>
              </div>

              <div className='content-body__wrapper'>
                <div className='col-6 col-md-3 process-box'>
                  <div className='image-box'>
                    <img
                      className=''
                      src='/static/images/about_follow_step1.jpg'
                      width='210'
                      height='210'
                      alt='step-one'
                      title='step-one'
                    />
                    <div className='process-num'>
                      <span className='number'>01</span>
                    </div>
                  </div>
                  <div className='curved-right-arrow'>
                    {' '}
                    <svg viewBox='0 0 155.139 155.139'>
                      <g>
                        <path
                          d='M109.719,40.548v-28.17l45.42,45.426l-45.42,45.42V74.708
			C56.202,78.742,12.966,106.613,2.452,142.76C0.847,137.247,0,131.537,0,125.689C0,81.534,48.027,45.196,109.719,40.548z'
                        />
                      </g>
                    </svg>
                  </div>
                  <div className='content-box'>
                    <div className='box-title'>
                      <h5>Schedule your Experience</h5>
                    </div>
                    {/* <div className='box-description'>
                      He found himself transformed in his bed into a horrible
                      vermin.
                    </div> */}
                  </div>
                </div>
                <div className='col-6 col-md-3 process-box'>
                  <div className='image-box'>
                    <img
                      className=''
                      src='/static/images/about-follow-steps2.jpg'
                      width='210'
                      height='210'
                      alt='step-one'
                      title='step-one'
                    />
                    <div className='process-num'>
                      <span className='number'>02</span>
                    </div>
                  </div>
                  <div className='curved-right-arrow'>
                    {' '}
                    <svg viewBox='0 0 155.139 155.139'>
                      <g>
                        <path
                          d='M109.719,114.588v28.17l45.42-45.42l-45.42-45.42v28.516C56.202,76.4,12.966,48.529,2.452,12.381
			C0.847,17.895,0,23.605,0,29.452C0,73.601,48.027,109.94,109.719,114.588z'
                        />
                      </g>
                    </svg>
                  </div>
                  <div className='content-box'>
                    <div className='box-title'>
                      <h5>Get Professional <br/> Advices</h5>
                    </div>
                    {/* <div className='box-description'>
                      He found himself transformed in his bed into a horrible
                      vermin.
                    </div> */}
                  </div>
                </div>
                <div className='col-6 col-md-3 process-box'>
                  <div className='image-box'>
                    <img
                      className=''
                      src='/static/images/about_follow_step3.jpg'
                      width='210'
                      height='245'
                      alt='step-one'
                      title='step-one'
                    />
                    <div className='process-num'>
                      <span className='number'>03</span>
                    </div>
                  </div>
                  <div className='curved-right-arrow'>
                    {' '}
                    <svg viewBox='0 0 155.139 155.139'>
                      <g>
                        <path
                          d='M109.719,40.548v-28.17l45.42,45.426l-45.42,45.42V74.708
			C56.202,78.742,12.966,106.613,2.452,142.76C0.847,137.247,0,131.537,0,125.689C0,81.534,48.027,45.196,109.719,40.548z'
                        />
                      </g>
                    </svg>
                  </div>
                  <div className='content-box'>
                    <div className='box-title'>
                      <h5>Meet Our Handyman Expert</h5>
                    </div>
                    {/* <div className='box-description'>
                      He found himself transformed in his bed into a horrible
                      vermin.
                    </div> */}
                  </div>
                </div>
               <div className='col-6 col-md-3 process-box'>
                  <div className='image-box'>
                    <img
                      className=''
                      src='/static/images/about_follow_step4.jpg'
                      width='210'
                      height='210'
                      alt='step-one'
                      title='step-one'
                    />
                    <div className='process-num'>
                      <span className='number'>04</span>
                    </div>
                  </div>
                  <div className='content-box'>
                    <div className='box-title'>
                      <h5>Get Our Best Services At Door</h5>
                    </div>
                    {/* <div className='box-description'>
                      He found himself transformed in his bed into a horrible
                      vermin.
                    </div> */}
                  </div>
                </div>
              </div>
              <div className='about-quotes'>
                <div className='quotes_title'>
                  <h2>We Work Hard And Make Your Home Beautiful</h2>
                </div>
                <div className='quotes_subtitle'>
                  <p>Friendly customer service staff for your all questions!</p>
                </div>
                <div className='about-phone-icon-wrap'>
                  <span className='seperate-wrapper'>
                    <span className='left-border'></span>
                  </span>
                  <div className='icon-wrapper'>
                    <span className='about-phone-icon fa fa-phone'></span>
                  </div>

                  <span className='seperate-wrapper'>
                    <span className='right-border'></span>
                  </span>
                </div>
                <div className='free-estimate'>
                  <h2>Free Estimate: 226 — 506 — 4825</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </React.Fragment>
  );
};

export default AboutFollowStep;
