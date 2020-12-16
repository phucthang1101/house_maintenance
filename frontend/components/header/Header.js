import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { DOMAIN } from '../../config';
import './Header.css';
import React, { useState, useRef, useEffect } from 'react';
import SearchBox from '../searchBox/searchBox';

const Header = (props) => {
  const router = useRouter();
  const [openSearch, setOpenSearch] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

  let randomBackground =
    'https://www.stortford-interiors.com/wp-content/uploads/2020/11/Project-Header-.jpg';

  const onToggleMenu = () => {
    setIsExpand(!isExpand);
    document.body.classList.toggle('noscroll-active');
  };
//useEffect(()=>{console.log(router.asPath)})
  // useEffect(() => {
  //   window.addEventListener('scroll', function (e) {
  //     const topPos = navbarRef.current.getBoundingClientRect().top;
  //     const scrollCheck = window.scrollY < 115;
  //     //console.log(window.scrollY)
  //     if (scrollCheck !== isOnTop) {
  //       setIsOnTop(scrollCheck);
  //     }
  //   });
  // });

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

  // useEffect(() => {
  //   // Navbar and dropdowns
  //   var toggle = document.getElementsByClassName('navbar-toggler')[0],
  //     collapse = document.getElementsByClassName('navbar-collapse')[0],
  //     dropdowns = document.getElementsByClassName('dropdown');

  //   // Toggle if navbar menu is open or closed
  //   function toggleMenu() {
  //     collapse.classList.toggle('collapse');
  //     collapse.classList.toggle('in');
  //   }

  //   // Close all dropdown menus
  //   function closeMenus() {
  //     for (var j = 0; j < dropdowns.length; j++) {
  //       dropdowns[j]
  //         .getElementsByClassName('dropdown-toggle')[0]
  //         .classList.remove('dropdown-open');
  //       dropdowns[j].classList.remove('open');
  //     }
  //   }

  //   // Add click handling to dropdowns
  //   for (var i = 0; i < dropdowns.length; i++) {
  //     dropdowns[i].addEventListener('click', function () {
  //       if (document.body.clientWidth < 768) {
  //         var open = this.classList.contains('open');
  //         closeMenus();
  //         if (!open) {
  //           this.getElementsByClassName('dropdown-toggle')[0].classList.toggle(
  //             'dropdown-open'
  //           );
  //           this.classList.toggle('open');
  //         }
  //       }
  //     });
  //   }

  //   // Close dropdowns when screen becomes big enough to switch to open by hover
  //   function closeMenusOnResize() {
  //     if (document.body.clientWidth >= 768) {
  //       closeMenus();
  //       collapse.classList.add('collapse');
  //       collapse.classList.remove('in');
  //     }
  //   }

  //   // Event listeners
  //   window.addEventListener('resize', closeMenusOnResize, false);
  //   toggle.addEventListener('click', toggleMenu, false);
  // }, []);

  // Toggle if navbar menu is open or closed

  const toggleOpenSearch = (e) => {
    e.preventDefault();
    setOpenSearch(!openSearch);
  };

  const openServicesSubMenu = (e) => {
    if (window.innerWidth <= 1024) {
      let servicesSubMenu = document.querySelector('.services-sub-menu');
      if (!servicesSubMenu.classList.contains('active-sub-menu')) {
        e.preventDefault();
        servicesSubMenu.classList.add('active-sub-menu');
      }
    }
  };
  // const closeServicesSubMenu = (e) => {
  //   let servicesSubMenu = document.querySelector('.services-sub-menu');
  //   servicesSubMenu.style.display = 'none';
  //   servicesSubMenu.style.maxHeight = 0 + 'px';
  // };

  return (
    <React.Fragment>
      <>
        {/* <Link href='/about'><a>About</a></Link>
      <Link href='/'><a>Home</a></Link> */}

        {/* <header className='header-top home-five'>
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
        className={`navbar navbar-expand-lg navbar-default header-navigation animated ${
          isOnTop ? '' : 'slideInDown fixed-nav'
        }`}
      >
        <div className='container-fluid'>
          <div className='row mx-0 w-100'>
            <button
              className='navbar-toggler collapsed'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'   
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='col-7 col-md-9 navbar-collapse in' id='navbarNav'>
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
      </nav> */}
      </>
      <div
        className={`site-menu ${isExpand ? 'site-menu__visible' : ''}`}
        id='site-menu'
      >
        <a
        
          id='close-menu'
          className='site-menu__close no-smoothState'
          onClick={onToggleMenu}
        ></a>
        <div
          className='site-menu__half left-half__project'
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${randomBackground})`,
          }}
        >
          <a
            href='https://www.stortford-interiors.com/projects/level-10-business-lounge/'
            className='btn site-menu__left-halft-link'
            target='_parent'
          >
            <span>Level 10 Business Lounge</span>View Project
          </a>
        </div>
        <div className='site-menu__half right-half__nav'>
          <div className='nav-menu__wrapper'>
            <nav className='site-menu__nav' id='nav'>
              <ul id='menu-header'>
                <li
                  className={`menu-item ${
                    router.asPath == '/' ? 'current_page_item' : ''
                  }`}
                >
                  <Link href='/'>
                    <a>HOME</a>
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    router.asPath == '/about' ? 'current_page_item' : ''
                  }`}
                >
                  <Link href='/about'>
                    <a>ABOUT</a>
                  </Link>
                </li>
                <li
                  className={`menu-item item-services ${
                    router.asPath == '/services' ? 'current_page_item' : ''
                  }`}
                >
                  <Link href='/services'>
                    <a onClick={openServicesSubMenu}>SERVICES</a>
                  </Link>
                  <div className='services-sub-menu'>
                    <div className='services-sub-menu__wrap'>
                      <p className='services-sub-menu__title'>By Room</p>
                      <Link href='/services/bathroom'>
                        <a className='services-sub-menu__link first'>
                          Bathroom
                        </a>
                      </Link>
                      <Link href='/services/basement'>
                        <a className='services-sub-menu__link'>Basement</a>
                      </Link>
                      <Link href='/services/kitchen'>
                        <a className='services-sub-menu__link'>Kitchen</a>
                      </Link>
                    </div>
                    <div className='services-sub-menu__wrap'>
                      <p className='services-sub-menu__title'>By Area</p>
                      <Link href='/services/ceiling'>
                        <a className='services-sub-menu__link first'>Ceiling</a>
                      </Link>
                      <Link href='/services/door-windows'>
                        <a className='services-sub-menu__link '>
                          Door/Windows
                        </a>
                      </Link>
                      <Link href='/services/drywall'>
                        <a className='services-sub-menu__link '>Drywall</a>
                      </Link>
                      <Link href='/services/exterior'>
                        <a className='services-sub-menu__link'>Exterior</a>
                      </Link>
                    </div>
                    <div className='services-sub-menu__wrap'>
                      <p className='services-sub-menu__title'>By Service</p>
                      <Link href='/services/electrical'>
                        <a className='services-sub-menu__link first'>
                          Electrical
                        </a>
                      </Link>
                      <Link href='/services/painting'>
                        <a className='services-sub-menu__link '>Painting</a>
                      </Link>
                      <Link href='/services/plumbing'>
                        <a className='services-sub-menu__link '>
                          Plumbing
                        </a>
                      </Link>
                      <Link href='/services/carpentry'>
                        <a className='services-sub-menu__link'>Carpentry</a>
                      </Link>
                    </div>
                  </div>
                </li>
                <li
                  className={`menu-item ${
                    router.asPath == '/contact' ? 'current_page_item' : ''
                  }`}
                >
                  <Link href='/contact'>
                    <a>CONTACT</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <header id='header' className='site-header' role='banner'>
        <div className='container clearfix'>
          <a
            href='https://www.stortford-interiors.com'
            className='site-header__logo'
            target='_parent'
          >
            <span className='text-replace'></span>
          </a>
        </div>
      </header>
      <div className='fixed-wrap higher'>
        <div className='container clearfix'>
          <div className='site-header__controls clearfix'>
            <a
            
              id='toggle-search'
              className='site-header__controls__search no-smoothState'
            ></a>
            <a
              
              id='toggle'
              className='site-header__controls__menu no-smoothState'
              onClick={onToggleMenu}
            ></a>
          </div>
        </div>
      </div>
      <section className={`hidden-search ${openSearch ? 'open' : ''}`}>
        <SearchBox toggleOpenSearch={toggleOpenSearch} />
      </section>
    </React.Fragment>
  );
};

export default Header;
