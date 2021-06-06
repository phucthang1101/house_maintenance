import React, { useEffect, useRef } from 'react';
import SvgIcon from './svgIcons';

import { Fade } from 'react-reveal';
import './about.css';
import Link from 'next/link';
import Typed from 'typed.js';

class TypedReactDemo extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className='wrap'>
        <div className='type-wrap'>
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => {
              this.el = el;
            }}
          />
        </div>
      </div>
    );
  }
}

const About = () => {
  const turnOnHover = (e) => {
    if (e.target.classList.contains('run-animation')) {
      setTimeout(() => {
        var element = document.getElementById('logo');

        // -> removing the class
        element.classList.remove('run-animation');

        element.offsetWidth;
        element.style.animation = 'none';
        element.offsetHeight; /* trigger reflow */
        element.style.animation = null;

        //  void element.offsetWidth;

        // -> and re-adding the class
        element.classList.add('run-animation');
      }, 100);
      // e.target.classList.toggle('unhovered');
      // e.target.classList.toggle('hovered');
    }
  };

  const valueBox = useRef();

  const changeMenuBg = () => {
    const position = window.pageYOffset;
    const valueBoxTop = valueBox.current.offsetTop;
    if (position > valueBoxTop - 300) {
      // console.log(valueBoxTop)
      document
        .querySelector('.value-content-box')
        .classList.add('border-visible');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeMenuBg, { passive: true });

    return () => {
      window.removeEventListener('scroll', changeMenuBg);
    };
  }, []);
  return (
    <React.Fragment>
      <div className='about-criteria-container'>
        <div className='row mx-0'>
          <Fade bottom>
            <div
              className='about-image-section col-12 col-md-5'
              style={{
                backgroundImage: `url(/static/images/index_about_section.jpg)`,
              }}
            ></div>
          </Fade>
          <Fade top>
            <div
              className='about-content-section run-animation col-12 col-md-5'
              id='logo'
              onMouseEnter={turnOnHover}
              onTouchStart={turnOnHover}
              // onClick={onClickSvg}
            >
              <div className='about-content-wrapper '>
                <h4 className='small-title'>D.C Finisher</h4>
                <h2>
                  We Build for Your <br /> Comfort
                </h2>
                <p>
                  We stand for quality, safety and credibility, so you could be
                  sure about our work. We work to ensure people’s comfort at
                  their home, and to provide the best and the fastest help at
                  fair prices.
                </p>
                <div className='about-ceo-signature unhover'>
                  <p>
                    CEO:
                    <br />
                    <h5>CAO DAO</h5>{' '}
                  </p>
                  <SvgIcon
                    width={144}
                    hieght={80}
                    className='database'
                    viewBox='0 0 305.85717 169.11043'
                  >
                    {' '}
                    <g
                      transform='translate(58.391646,-369.21886)'
                      style={{ display: 'inline' }}
                      id='layer2'
                    >
                      <path
                        id='path42'
                        d='m -12.473214,535.59227 c -8.284839,-2.7509 -16.332123,-12.03248 -22.678569,-19.65476 -10.619711,-11.65807 -15.74958,-30.22477 -17.764883,-35.52977 -4.931911,-17.2493 -1.887829,-37.23577 2.267857,-47.625 6.266464,-19.32346 14.798578,-28.69607 23.056548,-37.04166 21.4613146,-15.59159 32.9479887,-17.53491 44.60119,-21.54465 11.459364,-2.87802 22.115388,-2.30814 32.127976,-1.13394 13.485205,1.00551 20.26383,4.14508 29.104166,7.93751 10.76395,5.867 17.897919,13.47411 24.190479,24.19047 7.11391,10.93623 8.77791,14.51631 12.09523,23.81252 2.83137,13.77283 5.84852,28.42546 2.64584,38.17558 -2.79893,13.39398 -8.92111,19.98929 -13.98512,30.99404 l -12.851192,19.2768 61.988092,-13.60715 c 0.8726,11.45013 0.49585,13.55834 9.44941,15.49701 2.33462,0.086 14.69823,-6.6212 21.16667,-18.5208 -1.52784,-14.67378 -3.12206,-14.64856 -9.82738,-17.38692 -6.32339,1.32646 -11.10187,0.27858 -15.49703,6.42558 -2.75681,3.00346 -3.61563,6.72679 -5.29167,13.60715'
                      />
                      <path
                        id='path945'
                        d='m 184.45238,486.83333 -1.5119,13.98513 c 2.57365,8.29841 2.51087,12.39207 10.58333,13.22916 5.25017,-1.1724 9.31319,-10.65487 13.60714,-18.52085 9.05177,11.2273 8.67116,11.58425 12.09524,13.60714 6.92956,4.92474 17.00893,3.02383 17.00893,3.02383 5.72314,-2.79697 7.63041,-12.49904 8.31548,-16.63097 0.29191,-6.58939 -1.12464,-13.37145 -8.31549,-20.03274 -5.50169,-1.1897 -6.84397,-4.25816 -15.11904,-1.51189 -4.07663,0.62598 -8.50902,4.68593 -10.58333,8.31546 -2.73987,4.44234 -2.45979,8.76557 -3.40179,13.22917'
                      />
                      <path
                        d='m 65.011904,459.24106 c 0.79049,5.52059 5.25578,7.57795 9.07143,7.55952 3.66471,-2.26748 5.12096,-5.84619 5.29166,-9.4494'
                        id='path943-4'
                      />
                      <path
                        id='path949-3'
                        d='m 56.173123,433.58958 a 4.401886,6.7513461 0 0 1 5.128656,-5.40377 4.401886,6.7513461 0 0 1 3.528118,7.8609 4.401886,6.7513461 0 0 1 -5.121975,5.41866 4.401886,6.7513461 0 0 1 -3.537818,-7.85064'
                      />
                      <path
                        d='m 79.024666,433.32231 a 4.401886,6.7513461 0 0 1 5.128657,-5.40377 4.401886,6.7513461 0 0 1 3.528118,7.8609 4.401886,6.7513461 0 0 1 -5.121976,5.41866 4.401886,6.7513461 0 0 1 -3.537817,-7.85065'
                        id='path953-8'
                      />
                    </g>
                  </SvgIcon>
                </div>

                <p>
                  <Link href={`/about`}>
                    <a>
                      More about us
                      <span className='ti-angle-double-right'></span>
                    </a>
                  </Link>
                </p>
              </div>
            </div>{' '}
          </Fade>
        </div>
        <div className='row mx-0'>
          
            <div className='col-12 col-md-5 value-animating-box' ref={valueBox}>
              <div className='value-content-box'>
                <div className='border-top'></div>
                <div className='border-right'></div>
                <div className='border-bottom'></div>
                <div className='border-left'></div>
                <div className='value-box__inner-content'>
                  <span className='content-animating-box__box__title'>
                    Our Values
                  </span>
                  <div className='type-writing'>
                    We are
                    <div className='type-wrap'>
                      {/* <Typed options={options}></Typed>
                    <span
                      ref={typeWritter}
                      className='element'
                      id='element'
                      style={{ whiteSpace: 'pre' }}
                    /> */}
                      <TypedReactDemo
                        strings={[
                          'Exacting',
                          'Collaborative',
                          'Committed',
                          'Principled',
                          'Responsible',
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
          <Fade right>
            <div
              className='col-12 col-md-5 value-animating-box__background'
              style={{
                backgroundImage: `url(/static/images/index_whychooseus_section.jpg)`,
              }}
            ></div>
          </Fade>
        </div>

        <div className='row mx-0'>
          <Fade top>
            <div
              className='about-image-section col-12 col-md-5'
              style={{
                backgroundImage: `url(/static/images/index_whychooseus_section2.jpg)`,
              }}
            ></div>
          </Fade>
          <Fade bottom>
            <div className='about-content-section col-12 col-md-5'>
              <div className='criteria-section'>
                <div className='criteria-title'>
                  <h3>Why choose us</h3>
                </div>
                <div className='single-criteria'>
                  <div className='icon-box'>
                    <i className='pro-master-icon-calendar-1'></i>
                  </div>
                  <div className='text-box'>
                    <h3>Quick, Easy & Convenient Scheduling to Save Time</h3>
                  </div>
                </div>
                <div className='single-criteria'>
                  <div className='icon-box'>
                    <i className='pro-master-icon-hand'></i>
                  </div>
                  <div className='text-box'>
                    <h3>
                      Respectful of you, Whether it’s a small or Crital Project
                    </h3>
                  </div>
                </div>
                <div className='single-criteria'>
                  <div className='icon-box'>
                    <i className='pro-master-icon-labor'></i>
                  </div>
                  <div className='text-box'>
                    <h3>
                      Our Handymen are reliable & Trustworthly Professional
                    </h3>
                  </div>
                </div>
                <div className='single-criteria'>
                  <div className='icon-box'>
                    <i className='pro-master-icon-gear'></i>
                  </div>
                  <div className='text-box'>
                    <h3>We Listen & Solve Your Problems of your Home</h3>
                  </div>
                </div>
              </div>{' '}
            </div>{' '}
          </Fade>
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;
{
  /*
   <div className='col-12 col-md-6'>
            <div className='about-section unhover'>
              <div className='about-tagline'>We are experience of 20 years</div>
              <h3 className='about-mainline'>House Fixing is our passion</h3>
              <div className='about-underline'></div>
              <p className='about-highlight'>
                Nemo enim ipsam voluptatem quia voluptas
              </p>
              <p className='about-content'>
                Sed quia consequ untur magni dolores eos qui rat ione volup ta
                tem sequi nesci unt. Neque porro quisqu am est, qui dolorem
                ipsum quia dolor sitae amet, conse ctetur, adipisci velit. sed
                quia non numq uam qui ratione volup tatem sequi nesciunt. Neque
                porro quisquam est, qui dolorem ipsum quia dolor sit amet, conse
                ctetur, adipisci velit.
              </p>
              <div className='about-name_box'>
                <img
                  src='http://shtheme.net/demosd/handylexo5/wp-content/uploads/2018/12/about-3-1.png'
                  alt='Awesome Image'
                />
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
           
          </div>
      
   */
}
