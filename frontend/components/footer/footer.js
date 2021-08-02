import React from 'react';
import './footer.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className='row mx-0'>
        <div className='row mx-auto w-100'>
          <div className='container-fluid mx-0'>
            <div className='row footer_sidebar mx-0 lines'>
              <div className='widget widget1 about_us_widget col-12 col-lg-4 px-0'>
                <div id='text-2'>
                  {' '}
                  <div className='textwidget '>
                    {/* <p>
                      <a
                        className='logo'
                        href='http://shtheme.net/demosd/handylexo5/'
                      >
                        <img
                          src='http://shtheme.net/demosd/handylexo1/wp-content/uploads/2019/01/logo.png'
                          alt='logo image'
                        />
                      </a>
                    </p> */}
                    <div className='footer__logo-plus-name row mx-0 align-items-center mb-5'>
                      <div className='logo-container-wrapper col-5 px-0 '>
                        <div className='l-container'>
                          <div className='heart-loader'>
                            <i className='heart fas fa-house-damage'></i>
                            <i className='hammer fas fa-hammer'></i>
                            <i className='wrench fas fa-wrench'></i>
                            <i className='screw-driver fas fa-screwdriver'></i>
                          </div>
                        </div>
                      </div>
                      <div className='footer__site-name col-7 px-0'>
                        {' '}
                        <h2 className='site-header__name'>D.C FINISHER</h2>
                        <h4 className='site-header__subname'>
                          Home Repair & Renovating
                        </h4>
                      </div>
                    </div>

                    <p>
                      We work to ensure people’s comfort at their home, and to
                      provide the best and the fastest help at fair prices. We
                      stand for quality, safety and credibility, so you could be
                      sure about our work.
                    </p>
                    <Link href='/about'>
                      <a className='read_more'>
                        Read More <i className='fa fa-angle-double-right'></i>
                      </a>
                    </Link>

                    {/* <div className='social_icon row m0'>
                  
                      <div className='social-btns'>
                        <a className='social-btn facebook' href='#'>
                          <i className='fa fa-facebook'></i>
                        </a>
                        <a className='social-btn twitter' href='#'>
                          <i className='fa fa-twitter'></i>
                        </a>
                        <a className='social-btn google' href='#'>
                          <i className='fa fa-google'></i>
                        </a>
                        <a className='social-btn dribbble' href='#'>
                          <i className='fa fa-dribbble'></i>
                        </a>
                        <a className='social-btn skype' href='#'>
                          <i className='fa fa-skype'></i>
                        </a>
                      </div>{' '}
                    </div>
                   */}
                  </div>
                </div>
                <div className='line'></div>
              </div>
              <div className='widget widget2 widget_links col-12 col-lg-4 '>
                <div id='text-3'>
                  {' '}
                  <div className='textwidget'>
                    <div className='service-widget row mx-0'>
                      <div className='text-align-center col-6 px-0'>
                        <h4 className='widget_title'>our services</h4>
                        <div className='widget_inner row mx-0'>
                          <ul>
                            <li>
                              <Link href='/services/bathroom'>
                                <a className=''>Bathroom</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/services/doors-windows'>
                                <a className=''>Door/Windows</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/services/walls-drywall'>
                                <a className=''>Drywall</a>
                              </Link>{' '}
                            </li>
                            <li>
                              <Link href='/services/plumbing'>
                                <a className=''>Plumbing</a>
                              </Link>{' '}
                            </li>
                            <li>
                              <Link href='/services/painting'>
                                <a className=''>Painting</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='text-align-center col-6 px-0'>
                        <h4 className='widget_title'>Overview</h4>
                        <div className='widget_inner row mx-0'>
                          <ul>
                            <li>
                              <Link href='/about'>
                                <a>About</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/services'>
                                <a>Services</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/contact'>
                                <a>Contact</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='line'></div>
              </div>

              <div className='widget widget4 widget_contact col-sm-6 col-lg-4'>
                <div id='text-5'>
                  {' '}
                  <div className='textwidget'>
                    <h4 className='widget_title'>Get In Touch</h4>
                    <div className='widget_inner row m0'>
                      <ul>
                        <li>
                          <i className='fa fa-map-marker'></i>
                          <div className='location_address fleft'>
                            <strong>D.C Finisher</strong>
                            <br />
                            1109 Wyandotte St West, Windsor
                          </div>
                        </li>
                        <li>
                          <i className='fa fa-phone'></i>
                          <div className='fleft contact_no'>
                           + 226 506 4825
                          </div>
                        </li>
                        <li>
                          <i className='fa fa-envelope' aria-hidden='true'></i>
                          <div className='fleft contact_mail'>
                          matttran1101@gmail.com
                          </div>
                        </li>
                        <li>
                          <i className='fa fa-clock-o' aria-hidden='true'></i>
                          <div className='fleft service_time'>
                            Monday – Friday : 9:00 - 5:00
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer_bottom'>
          Designed and Developed by: Thang and Van
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
{
  /* <div className='widget widget3 widget_links widget_links2 col-sm-6 col-lg-3 '>
<div id='text-4'>
  {' '}
  <div className='textwidget'>
    <h4 className='widget_title'>Quick Links</h4>
    <div className='widget_inner row m0'>
      <ul>
        <li>
          <a href='index.html'>Home</a>
        </li>
        <li>
          <a href='services.html'>Our Services</a>
        </li>
        <li>
          <a href='about.html'>About Us</a>
        </li>
        <li>
          <a href='blog.html'>News</a>
        </li>
        <li>
          <a href='contact.html'>Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</div>
<div className='line'></div>
</div> */
}
