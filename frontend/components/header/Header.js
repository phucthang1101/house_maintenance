import Link from 'next/link';
import Router from 'next/router';
import { DOMAIN } from '../../config';
import './Header.css';
import React, { useState, useRef, useEffect } from 'react';
import SearchBox from '../searchBox/searchBox';

const Header = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', function(e){
      const topPos = navbarRef.current.getBoundingClientRect().top;
      const scrollCheck = window.scrollY < 115; 
      //console.log(window.scrollY)
      if (scrollCheck !== isOnTop) {
        
        setIsOnTop(scrollCheck);
      }
    })
  });
  // useEffect(() => {
  //   let scrollbar = props.scrollbarNodeRef.current
  //     ? props.scrollbarNodeRef.current
  //     : '';
  //   console.log(props.scrollbarNodeRef)
  //   console.log(scrollbar)

  //   if (typeof window !== 'undefined') {
  //     if (scrollbar !== '') {
  //       console.log( scrollbar.getValues())
  //       console.log( scrollbar.getScrollHeight())
  //       console.log( scrollbar.getClientHeight())
  //         const scrollCheck = scrollbar.getScrollTop() < 100;
  //         console.log(scrollCheck)
  //         if (scrollCheck !== isOnTop) {
  //           setIsOnTop(scrollCheck);
  //         }

  //     }
  //   }
  // },[openSearch]);

  const toggleOpenSearch = (e) => {
    e.preventDefault();
    setOpenSearch(!openSearch);
  };
  return (
  
    <React.Fragment>
      <header className='header-top home-five'>
        <div className='container header-top__container'>
          <div className='logo pull-left'>
            <a href='http://shtheme.net/demosd/handylexo5/'>
              <img
                src={`${DOMAIN}/static/images/logo.png`}
                alt='Awesome Image'
              />
            </a>
          </div>

          <div className='header-right-info pull-right'>
            <div className='single-header-right'>
              <div className='icon-box'>
                <i className='pro-master-icon-location'></i>
              </div>

              <div className='text-box'>
                <p>
                  13005 Greenville Avenue <br /> California, TX 70240
                </p>
              </div>
            </div>

            <div className='single-header-right'>
              <div className='icon-box'>
                <i className='pro-master-icon-smartphone'></i>
              </div>

              <div className='text-box'>
                <h4>Call Us :</h4>

                <h3>+ (1800) 456 7890</h3>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav
      ref={navbarRef}
        id='navbar'
        className={`navbar navbar-default header-navigation animated ${
          isOnTop ? '' : 'slideInDown fixed-nav'
        }`}
      >
        <div className='container-fluid'>
          <div className='row mx-0 w-100'>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='col-7 col-md-9 navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav header-navigation__list'>
                <li className='nav-item active'>
                  <a className='nav-link' href='#'>
                    Home <span className='sr-only'>(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    About Us
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Services
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Projects
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Shop
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Contact Us
                  </a>
                </li>
                <li className='search-btn-item'>
                  <a
                    onClick={(e) => toggleOpenSearch(e)}
                    className=' search-btn-tag popup-with-zoom-anim search-opener'
                  >
                    <i className='stroke-gap-icon icon icon-Search'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-5 col-md-2 right-side-box'>
              <a href='#' className='rq-quote-btn'>
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className={`hidden-search ${openSearch ? 'open' : ''}`}>
        <SearchBox toggleOpenSearch={toggleOpenSearch} />
      </section>
    </React.Fragment>
  );
};

export default Header;
