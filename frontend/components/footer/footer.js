import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <React.Fragment>
      <footer className='row'>
        <div className='row m0'>
          <div className='container'>
            <div className='contact_banner row m0'>
              <h2>If You Need Help ... Contact Us &amp; Get Quote</h2>

              <a href='#'>
                Contact us <i className='fa fa-angle-double-right'></i>
              </a>
            </div>
            <div className='row footer_sidebar'>
              <div
                className='widget widget1 about_us_widget col-sm-6 col-lg-3'
                style={{minHeight: '268px'}}
              >
                <div id='text-2'>
                  {' '}
                  <div className='textwidget'>
                    <p>
                      <a
                        className='logo'
                        href='http://shtheme.net/demosd/handylexo5/'
                      >
                        <img
                          src='http://shtheme.net/demosd/handylexo1/wp-content/uploads/2019/01/logo.png'
                          alt='logo image'
                        />
                      </a>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et.
                    </p>
                    <p>
                      <a className='read_more' href='#'>
                        Read More <i className='fa fa-angle-double-right'></i>
                      </a>
                    </p>
                    <div className='social_icon row m0'>
                      <ul className='nav'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='widget widget2 widget_links col-sm-6 col-lg-3'
                style={{minHeight: '268px'}}
              >
                <div id='text-3'>
                  {' '}
                  <div className='textwidget'>
                    <div className='service-widget'>
                      <h4 className='widget_title'>our services</h4>
                      <div className='widget_inner row m0'>
                        <ul>
                          <li>
                            <a href='#'>House Remodeling</a>
                          </li>
                          <li>
                            <a href='#'>Plumbing Services</a>
                          </li>
                          <li>
                            <a href='#'>Wood Flooring</a>
                          </li>
                          <li>
                            <a href='#'>Doors and Windows</a>
                          </li>
                          <li>
                            <a href='#'>Tiling and Painting</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='widget widget3 widget_links widget_links2 col-sm-6 col-lg-2'
                style={{minHeight: '268px'}}
              >
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
              </div>
              <div
                className='widget widget4 widget_contact col-sm-6 col-lg-4'
                style={{minHeight: '268px'}}
              >
                <div id='text-5'>
                  {' '}
                  <div className='textwidget'>
                    <h4 className='widget_title'>Get In Touch</h4>
                    <div className='widget_inner row m0'>
                      <ul>
                        <li>
                          <i className='fa fa-map-marker'></i>
                          <div className='location_address fleft'>
                            <strong>Logis Cargo Ltd.</strong>
                            <br />
                            42B, Tailstoi Town 5248 MT, Wordwide Country
                          </div>
                        </li>
                        <li>
                          <i className='fa fa-phone'></i>
                          <div className='fleft contact_no'>
                            <a href='#'>+ 01865 524 8503</a> /{' '}
                            <a href='#'>1254 954 7854</a>
                          </div>
                        </li>
                        <li>
                          <i className='fa fa-envelope-o'></i>
                          <div className='fleft contact_mail'>
                            <a href='#'>contact@logiccargo.com</a>
                          </div>
                        </li>
                        <li>
                          <i className='icon icon-Timer'></i>
                          <div className='fleft service_time'>
                            Monday – Friday : 800 – 1900
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
        <div className='row m0 footer_bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8'>
                Copyright ©<a href='#'>Handylexo</a>
                2019. All rights reserved
              </div>
              <div className='right col-sm-4'>
                Created by:
                <a href='#'>DesignArc</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
