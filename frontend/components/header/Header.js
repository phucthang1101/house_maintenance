import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { DOMAIN } from '../../config';
import './Header.css';
import React, { useState, useRef, useEffect } from 'react';
import SearchBox from '../searchBox/searchBox';
import RequestForm from '../index_components/testimonial_and_request/request-form';

const Header = (props) => {
  const router = useRouter();
  const [openSearch, setOpenSearch] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const [openRequestForm, setOpenRequestForm] = useState(false);

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
  const toggleOpenRequestForm = (e) => {
    e.preventDefault();
    console.log('outside');
    setOpenRequestForm(!openRequestForm);
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
                      <Link href='/services/doors-windows'>
                        <a className='services-sub-menu__link '>Door/Windows</a>
                      </Link>
                      <Link href='/services/walls-drywall'>
                        <a className='services-sub-menu__link '>Drywall</a>
                      </Link>
                      <Link href='/services/exterior'>
                        <a className='services-sub-menu__link'>Exterior</a>
                      </Link>
                    </div>
                    <div className='services-sub-menu__wrap'>
                      <p className='services-sub-menu__title'>By Service</p>
                      <Link href='/services/plumbing'>
                        <a className='services-sub-menu__link first'>
                          Plumbing
                        </a>
                      </Link>
                      <Link href='/services/carpentry'>
                        <a className='services-sub-menu__link '>Carpentry</a>
                      </Link>
                      <Link href='/services/painting'>
                        <a className='services-sub-menu__link '>Painting</a>
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
        <div className='container clearfix ml-0 '>
          <a href='/' className='site-header__logo' target='_parent'>
            <svg
              height='120.41391'
              width='120.00001'
              viewBox='0 0 120.00001 120.41391'
            >
              <defs id='defs26'>
                <rect
                  id='rect894'
                  height='330.85501'
                  width='490.70633'
                  y='-59.479553'
                  x='-113.3829'
                />
                <rect
                  id='rect888'
                  height='665.42749'
                  width='918.21564'
                  y='33.457249'
                  x='33.457249'
                />
                <rect
                  id='rect875'
                  height='52.69339'
                  width='237.17293'
                  y='323.32391'
                  x='139.31844'
                />
                <rect
                  id='rect865'
                  height='98.574364'
                  width='197.14873'
                  y='254.97903'
                  x='162.97627'
                />
              </defs>
              <g
                transform='matrix(0.89999999,0,0,0.89999999,-9,-7.4789908)'
                id='g20'
              >
                <g
                  id='g18'
                  transform='matrix(0.06666667,0,0,-0.06666667,3.3333331,344.10334)'
                >
                  <path
                    style={{
                      fill: '#b0b0b0',
                      fillOpacity: 1,
                      strokeWidth: '0.204081',
                    }}
                    id='path4'
                    d='m 1069.5884,4995.7369 v -41.1631 h 194.081 194.081 v 41.1631 41.1631 h -194.081 -194.081 z'
                  />
                  <path
                    style={{
                      fill: '#999999',
                      fillOpacity: 1,
                      strokeWidth: '0.204081',
                    }}
                    id='path6'
                    d='M 429.73354,4744.0235 C 351.7134,4647.1871 245.46888,4516.2284 193.71396,4452.7184 L 100,4337.0657 l 48.61207,-1.1837 48.61208,-1.1836 16.46933,18.8162 16.85708,18.8163 0.79592,-299.8969 1.18367,-299.9377 37.24477,-4.7143 c 58.81612,-7.0612 58.81612,-7.0612 58.81612,7.0612 0,6.6734 1.57142,15.2857 3.91835,19.204 3.5306,6.6735 1.18367,7.449 -28.61214,10.5918 l -32.14275,3.1429 -0.77551,307.7744 -0.7755,307.7744 168.59124,207.7952 c 92.91804,114.4894 171.7341,212.1013 175.65245,217.2033 l 7.0612,9.4082 194.40748,-240.3461 194.85644,-240.7339 v -116.4486 -116.4281 l 17.2449,-4.3061 c 9.7958,-2.347 18.4285,-4.3061 19.6121,-4.3061 1.1837,0 2.347,43.51 2.347,96.4486 v 96.4486 l 18.0407,-21.9591 c 11.7551,-14.8979 20.3877,-21.9591 26.2652,-21.5713 4.7143,0 190.5504,14.5101 412.4476,32.1427 374.0395,30.1836 404.223,32.1428 406.57,25.8775 3.5306,-9.0204 3.1428,-493.2228 -0.3878,-495.5697 -1.5714,-0.7755 -15.2856,-3.5306 -30.1835,-5.8775 -25.4898,-3.9184 -28.2244,-5.4898 -49.408,-26.2652 -12.551,-12.1633 -21.9591,-23.1224 -21.1632,-23.9183 0.7959,-0.7959 32.9386,3.1428 70.9589,8.6326 38.4284,5.4898 70.1834,10.1836 70.9589,10.1836 0.7756,0 1.9592,122.3261 2.347,271.693 l 1.1836,271.3051 56.857,4.7143 c 31.3672,2.3469 63.51,4.6939 71.7548,4.6939 8.2449,0.3877 14.5102,1.9591 13.7143,4.3061 -0.3878,1.9591 -113.3057,127.4281 -250.142,278.3663 l -248.9583,274.4685 h -88.9997 -89.3874 v -101.9385 -101.9384 h -158.775 -158.7954 v 101.9384 101.9385 H 838.26272 572.03916 Z'
                  />
                  <path
                    style={{
                      fill: '#ec3124',
                      fillOpacity: 0.85882354,
                      strokeWidth: '0.204081',
                    }}
                    id='path8'
                    d='m 1502.0359,4124.9644 c -43.1427,-47.4488 -90.1833,-96.8364 -104.6935,-110.1833 -22.3469,-21.1632 -28.2244,-24.6938 -40.7754,-24.6938 -7.8367,0 -16.4693,-1.5714 -18.8162,-3.1428 -2.347,-1.5714 -31.755,-34.5101 -65.4692,-73.3263 l -60.7753,-70.163 22.7346,-25.8775 c 12.551,-14.1224 34.8979,-37.2447 49.7958,-51.7549 l 26.6529,-26.2652 21.5714,5.8775 c 36.857,9.7959 63.1222,0 98.0201,-35.6733 20.7754,-21.1836 44.6937,-37.2448 56.061,-37.2448 3.1428,0 14.1224,4.6939 24.6938,10.5918 21.1836,11.3673 42.7345,12.9387 99.5915,7.449 24.306,-2.347 31.755,-1.5715 43.9182,4.3061 14.5101,7.0612 175.6524,169.3667 175.6524,177.2034 0,6.6531 -16.8571,16.0816 -28.6325,16.0816 -21.1632,0 -36.857,10.9796 -84.6936,61.1631 -55.6733,58.4283 -92.5099,105.8567 -110.5506,142.326 -10.5918,21.5714 -12.9388,31.3672 -15.2857,64.6937 -3.9388,64.6936 0.7755,66.6528 -88.9997,-31.3673 z m 8.2245,-105.0812 c 15.2856,-6.2653 165.0606,-173.2852 173.6932,-193.6728 16.4694,-38.8162 -29.0203,-86.265 -71.3466,-74.8977 -14.1224,3.9183 -31.3673,21.9591 -140.7547,146.6321 -39.9794,45.8774 -45.8773,57.6325 -38.0202,81.5507 7.4489,22.3469 34.8978,43.9183 58.4079,45.4897 2.7347,0.3877 10.9592,-1.9592 18.0204,-5.102 z m -193.6728,-143.1016 c 6.2653,-11.7551 5.4898,-12.1632 -19.6122,-12.1632 -12.9387,0 -23.5305,1.1837 -23.5305,2.7551 0,1.1836 2.7347,5.8775 6.6734,9.7959 8.6326,9.8163 30.9795,9.4081 36.4693,-0.3878 z m 3.9183,-23.9183 c 0,-1.9591 -4.3061,-6.6734 -9.7959,-10.1836 -11.755,-7.8367 -27.4488,-4.7143 -33.3264,6.2653 -3.9183,7.4489 -2.7346,7.8367 19.6122,7.8367 12.9183,0 23.5101,-1.5714 23.5101,-3.9184 z m 169.7545,-83.1221 8.6327,-9.0204 -23.1428,-1.1837 c -27.0407,-1.5714 -30.9795,1.1837 -18.4285,11.3673 12.1632,9.8163 21.9591,9.4286 32.9386,-1.1632 z m 3.9184,-24.3061 c 0.3877,-1.9591 -3.9184,-7.0612 -9.4081,-11.3673 -9.4082,-6.6734 -11.7551,-7.0612 -21.5714,-2.3469 -6.2857,3.1428 -11.755,8.6326 -12.551,12.551 -1.1836,6.2653 1.1837,7.0612 20.3877,5.8775 12.1632,-0.7959 22.3673,-2.7551 23.1428,-4.7143 z'
                  />
                  <path
                    style={{
                      fill: '#ec3124',
                      fillOpacity: 0.85882354,
                      strokeWidth: '0.204081',
                    }}
                    id='path10'
                    d='m 777.48743,4115.1685 c -37.24477,-5.102 -71.3671,-14.1224 -90.18336,-23.5305 -23.53053,-12.1632 -72.53036,-48.2243 -117.61184,-86.6528 -45.87739,-38.8161 -54.89776,-53.3263 -60.36713,-96.4486 -3.5306,-28.2244 -9.79589,-41.1631 -28.61215,-58.4284 -11.75506,-11.3673 -34.89783,-20.7754 -50.18349,-20.7754 -9.40813,0 -17.24484,-4.7143 -33.71417,-20.3877 -34.10192,-32.1427 -34.10192,-31.3672 24.30604,-89.7752 28.61214,-28.6325 53.71409,-50.5712 57.63245,-50.5712 3.91835,0 18.81626,11.3673 32.5509,25.1019 23.12237,23.1224 25.08155,26.653 25.08155,42.3468 0.38775,21.9591 10.97955,45.4692 31.75499,67.8365 19.99993,21.5714 33.71417,29.4081 51.36717,29.4081 16.46933,0 50.18349,-15.6734 76.44871,-35.6734 21.9591,-16.4693 39.5917,-19.9999 48.61207,-9.0204 4.30611,5.1021 15.67342,-4.6938 88.61194,-77.6323 l 83.50991,-83.1222 -10.5918,-10.9795 c -12.16322,-12.9388 -13.32648,-10.9796 32.93866,-60.7753 l 32.14274,-34.8979 -158.4076,-194.8769 C 725.7325,3219.2737 653.5899,3128.3148 652.01848,3124.0087 c -3.14285,-10.5918 0.7755,-18.8162 23.91828,-50.1835 19.20401,-25.4897 22.73461,-28.6121 42.34679,-34.1019 12.16322,-3.5306 24.69379,-7.4489 28.22439,-9.0204 5.87753,-1.9591 6.26529,-0.3877 4.30611,12.1633 -2.34693,13.7142 -1.57142,14.8979 6.26528,12.9387 4.71427,-0.7755 12.16323,-3.1429 16.08158,-4.7143 6.67345,-3.1428 7.44895,-1.9592 5.10202,10.9796 -2.75509,16.4693 -3.14284,16.4693 15.67342,8.6326 l 14.1224,-5.8775 -2.73469,15.6734 -2.34693,15.6734 14.1224,-5.8775 c 18.81626,-7.8367 18.42851,-7.8367 16.08158,7.8367 -2.75509,15.6734 -3.14285,15.6734 15.67341,7.8367 l 14.1224,-5.8775 -2.34693,14.1224 c -2.34693,12.9387 -1.57142,14.1224 6.26529,12.1632 4.71426,-0.7755 12.16322,-3.1429 16.08157,-4.7143 6.67345,-3.1428 7.44896,-1.9592 5.10202,10.9796 -2.75509,16.4693 -3.14284,16.4693 15.67342,8.6326 l 14.1224,-5.8775 -2.73469,15.6734 -2.34693,15.6734 14.1224,-5.8776 c 18.81626,-7.8367 18.42851,-7.8367 16.08158,7.8368 -2.75509,15.6734 -3.14285,15.6734 15.67341,7.8367 l 14.1224,-5.8776 -2.73468,15.6734 -2.34693,15.6735 14.1224,-5.8776 c 18.81625,-7.8367 18.42855,-7.8367 16.08158,7.8367 -2.34694,15.2857 0,16.4694 17.65297,7.449 l 12.1428,-6.2857 -2.7346,16.0816 -2.347,16.0816 14.1224,-5.8776 c 18.8163,-7.8367 18.4285,-7.8367 16.0816,7.8367 -2.7347,15.6734 -3.1428,15.6734 15.6734,7.8367 l 14.1224,-5.8775 -2.7347,15.6734 -2.3469,15.6734 14.1224,-5.8775 c 18.8163,-7.8367 18.4285,-7.8367 15.6734,7.8367 -3.1428,15.6734 0,16.8571 18.0408,7.449 l 12.1632,-6.2653 -2.7347,16.0816 -2.3469,16.0815 14.1224,-5.8775 c 17.653,-7.0612 17.2448,-7.0612 17.2448,0 0,3.5306 44.306,-42.3468 98.0201,-101.9384 54.1018,-59.2039 99.5915,-107.816 101.1425,-107.816 1.5714,0 34.5101,31.755 73.3263,70.959 l 70.5711,70.5712 -91.3466,88.9996 c -68.2242,66.6529 -90.9588,91.3467 -90.9588,98.4079 0,6.653 1.5714,8.6326 6.2652,6.653 3.5306,-1.1837 10.2041,-3.5306 15.2857,-4.6939 9.0204,-2.3469 9.4081,-1.5714 7.0612,12.1633 l -2.3469,14.1224 14.8979,-5.8776 c 8.2244,-3.5306 15.2856,-6.2653 16.4693,-6.2653 0.7755,0 0.3878,6.2653 -1.1837,14.5102 -2.3469,12.551 -1.9591,13.7142 4.3061,11.7551 3.5306,-1.5715 10.5918,-3.9184 15.6735,-5.1021 9.0203,-2.3469 9.4081,-1.5714 7.0612,12.1633 l -2.347,14.1224 14.8979,-5.8776 c 8.2245,-3.5306 15.2857,-6.2653 16.4694,-6.2653 0.7755,0 0.3877,6.2653 -1.1837,14.5102 -2.3469,12.551 -1.9592,13.7142 4.3061,11.7551 3.5306,-1.5715 10.5918,-3.9184 15.6734,-5.1021 9.0204,-2.3469 9.4081,-1.5714 7.0612,12.1633 l -2.3469,14.1224 14.8979,-5.8776 c 8.2245,-3.5306 15.2857,-6.2653 16.0816,-6.2653 0.3877,0 0,6.6735 -1.1837,14.5102 -1.9592,12.551 -1.5714,14.1224 4.3061,11.7551 3.9184,-1.5715 10.9796,-3.9184 16.0816,-5.1021 9.0204,-2.3469 9.4081,-1.5714 7.0612,12.1633 l -2.3469,14.1224 14.8979,-5.8776 c 8.2244,-3.5306 15.2856,-6.2653 16.0815,-6.2653 0.3878,0 0,6.6735 -1.1836,14.5102 -1.9592,12.551 -1.5715,14.1224 4.3061,11.7551 22.3468,-8.6327 24.306,-7.8368 22.7346,7.0612 l -1.5714,14.1224 14.5101,-5.8776 c 8.2245,-3.5306 15.2857,-6.2653 16.0816,-6.2653 0.3877,0 0,6.6735 -1.1837,14.5102 -1.9592,12.551 -1.5714,14.1224 4.3265,11.7551 3.9184,-1.5715 11.3673,-3.9184 16.4694,-5.1021 8.6326,-2.3469 9.4081,-1.1836 9.4081,12.1428 0,10.9796 -3.9184,19.2245 -16.0816,34.8979 -8.6326,10.9795 -19.6122,21.9591 -24.306,24.6938 -15.6734,8.6326 -45.8774,5.8775 -71.3467,-6.6735 -26.2652,-13.3265 -28.2244,-13.7142 -50.5713,-7.0612 -10.5918,3.5306 -25.8774,14.1224 -45.4896,32.9387 -16.0816,15.2856 -33.7142,30.1836 -38.8162,32.9386 -14.5101,7.449 -45.0815,5.8776 -59.9794,-3.1428 l -12.9387,-7.8367 -50.959,50.5712 -51.1427,50.5305 -62.7345,-77.2446 c -34.4896,-42.3468 -63.8977,-78.7957 -65.4691,-81.163 -1.9592,-2.7347 -15.6734,8.2448 -35.2856,28.2244 -18.0408,17.653 -34.5101,32.1427 -36.4693,32.1427 -1.9591,0 -7.4489,-3.9183 -12.55094,-8.6326 l -9.40813,-8.6326 -82.7344,82.7344 -82.73441,82.7344 10.18364,12.5509 c 16.46933,19.6122 14.51015,25.8775 -21.16319,67.4284 -37.99987,44.3264 -43.8774,63.9385 -23.87747,82.367 24.30604,22.7347 62.73448,33.7142 130.16281,37.2448 43.51005,1.9592 110.57109,-2.3469 145.85659,-9.4081 10.5918,-1.9592 10.9796,-1.9592 10.9796,15.6734 v 17.653 l -30.1836,8.2245 c -16.8571,4.3061 -46.26511,10.9795 -65.85688,14.1224 -41.97945,7.8367 -160.77495,10.9591 -199.97889,5.4897 z m -36.44886,-970.7721 c 8.63263,-7.8367 9.02038,-27.4489 0.38776,-37.2447 -7.83671,-8.6327 -27.44889,-9.0204 -37.24477,-0.3878 -8.63262,7.8367 -9.02038,27.4489 -0.38775,37.2448 7.8367,8.6326 27.42847,9.0203 37.24476,0.3877 z'
                  />
                  <path
                    style={{
                      fill: '#b0b0b0',
                      fillOpacity: 1,
                      strokeWidth: '0.204081',
                    }}
                    id='path12'
                    d='m 1010.7723,3895.5979 0.3878,-127.0404 19.204,-16.8571 19.6122,-17.2448 v 141.5301 c 0,135.6526 -0.3878,141.5301 -7.449,141.5301 -3.9183,0 -12.9387,1.1837 -19.6122,2.3469 l -12.1428,2.7755 z'
                  />
                  <path
                    style={{
                      fill: '#b0b0b0',
                      fillOpacity: 1,
                      strokeWidth: '0.204081',
                    }}
                    id='path14'
                    d='m 583.42688,3757.9861 c -9.40813,-15.6734 -10.20405,-26.653 -1.57142,-26.653 8.22446,0 171.73409,-18.8162 187.79526,-21.5713 l 11.75506,-1.9592 -17.653,17.653 c -16.08158,16.0816 -18.81626,17.653 -36.85701,17.653 -13.32649,0 -24.30604,2.7347 -35.2856,9.4081 -11.3673,6.6531 -27.06113,10.5918 -54.10185,13.7143 -20.77543,2.3469 -39.5917,4.3061 -41.95903,4.3061 -2.36734,0 -7.8163,-5.8775 -12.12241,-12.551 z'
                  />
                  <path
                    style={{
                      fill: '#ec3124',
                      fillOpacity: 0.85882354,
                      strokeWidth: '0.204081',
                    }}
                    id='path16'
                    d='m 1443.9953,3151.0699 c -38.4284,-38.4285 -68.9998,-71.7549 -67.0406,-73.3263 1.5714,-1.5714 19.204,-12.9387 38.8162,-25.0816 l 36.0611,-22.3468 57.2447,56.8569 57.6325,56.857 -24.3061,38.8162 c -12.9387,21.5713 -24.6938,38.8162 -25.8774,38.8162 -1.1837,0 -33.7142,-31.7754 -72.5304,-70.5916 z'
                  />
                </g>
              </g>
            </svg>
            <div>
              {' '}
              <h2 className='site-header__name'>D.C FINISHER</h2>
              <h4 className='site-header__subname'>Home Repair & Renovating</h4>
            </div>
          </a>
        </div>
      </header>
      <div className='fixed-wrap higher'>
        <div className='container clearfix'>
          <div className='site-header__controls clearfix'>
            <a
              id='toggle-search'
              className='site-header__controls__search no-smoothState'
              onClick={toggleOpenRequestForm}
            >
              <p>Get Quote</p>
            </a>
            <a
              id='toggle'
              className='site-header__controls__menu no-smoothState'
              onClick={onToggleMenu}
            ></a>
          </div>
        </div>
      </div>
      {/* <section className={`hidden-search ${openSearch ? 'open' : ''}`}>
        <SearchBox toggleOpenSearch={toggleOpenSearch} />
      </section> */}
       <section
        className={`hidden-search  ${openRequestForm ? 'open fadeInUp' : ''}`}
      >
        <RequestForm toggleOpenRequestForm={toggleOpenRequestForm} />
      </section>
    </React.Fragment>
  );
};

export default Header;
