// import React, { useEffect, useRef } from 'react';
// import Slider from 'react-slick';
// import './mainSlider.css';
// import  Fade  from 'react-reveal';
// import { motion } from 'framer-motion';

// const SampleNextArrow = (props) => {
//   const { className, style } = props;
//   const handleClick = (e) => {
//     e.preventDefault();
//     let arrowBtn = e.currentTarget;
//     if (!arrowBtn.classList.contains('animate')) {
//       arrowBtn.classList.add('animate');
//       setTimeout(() => {
//         arrowBtn.classList.remove('animate');
//       }, 1600);
//     }

//     props.handleArrowClick('next');
//   };
//   return (
//     <div className='slick-nav next-arrow' id='slick-nav' onClick={handleClick}>
//       <i></i>
//       <svg>
//         <use xlinkHref='#circle' />
//       </svg>
//     </div>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style } = props;
//   const handleClick = (e) => {
//     e.preventDefault();
//     let arrowBtn = e.currentTarget;
//     if (!arrowBtn.classList.contains('animate')) {
//       arrowBtn.classList.add('animate');
//       setTimeout(() => {
//         arrowBtn.classList.remove('animate');
//       }, 1600);
//     }
//     props.handleArrowClick('pre');
//   };

//   return (
//     <div className='slick-nav prev-arrow' id='slick-nav' onClick={handleClick}>
//       <i></i>
//       <svg>
//         <use xlinkHref='#circle' />
//       </svg>
//     </div>
//   );
// };

// const MainSlider = () => {
//   const easing = [0.6, -0.05, 0.01, 0.99];
//   const sliderRef = useRef(null);

//   const arrowClick = (side) => {
//     if (side == 'next') {
//       sliderRef.current.slickNext();
//     } else {
//       sliderRef.current.slickPrev();
//     }
//   };

//   const settings = {
//     lazyLoad: 'progressive',

//     arrows: true,
//     dots: false,
//     fade: true,
//     infinite: true,
//     dots: true,
//     speed: 4000,
//    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
//     touchThreshold: 100,
//     prevArrow: <SamplePrevArrow handleArrowClick={arrowClick} />,
//     nextArrow: <SampleNextArrow handleArrowClick={arrowClick} />,
//   };

//   function afterChangeEvent(currentSlide) {
//     let SliderNodeChilds = document.body.querySelectorAll(
//       `.slick-current[data-index='${currentSlide}'] .animated`
//     );
//     //  console.log('afterChangeEvent')
//     SliderNodeChilds.forEach((nodeChild) => {
//       let animationIn = nodeChild.dataset.animationIn;
//       //    console.log(animationIn);
//       nodeChild.classList.add(animationIn);
//     });
//     let preSlideIndex;
//     if (currentSlide == 0) preSlideIndex = 2;
//     else preSlideIndex = currentSlide - 1;

//     let PreSliderNodeChilds = document.body.querySelectorAll(
//       `.slick-slide[data-index='${preSlideIndex}'] .animated`
//     );
//     PreSliderNodeChilds.forEach((preNodeChild) => {
//       let animationOut = preNodeChild.dataset.animationOut;
//       preNodeChild.classList.remove(animationOut);
//     });

//     let PreSlideImg = document.body.querySelectorAll(
//       `.slick-slide[data-index='${preSlideIndex}'] .full-image`
//     );
//     // console.log(preSlideIndex,PreSlideImg);
//     PreSlideImg[0].classList.remove('zoomFadeOut');
//   }

//   function beforeChangeEvent(currentSlide) {
//     let SliderNodeChilds = document.body.querySelectorAll(
//       `.slick-current[data-index='${currentSlide}'] .animated`
//     );
//     //  console.log('beforeChangeEvent')
//     SliderNodeChilds.forEach((nodeChild) => {
//       let animationIn = nodeChild.dataset.animationIn;
//       let animationOut = nodeChild.dataset.animationOut;
//       //  console.log(animationIn);
//       nodeChild.classList.remove(animationIn);
//       nodeChild.classList.add(animationOut);
//     });

//     let SlideImg = document.body.querySelectorAll(
//       `.slick-current[data-index='${currentSlide}'] .full-image`
//     );
//     // console.log(SlideImg, SlideImg[0].classList);
//     SlideImg[0].classList.add('zoomFadeOut');

//     if (currentSlide == 0) {
//       let temp = currentSlide + 3;
//       let SliderNodeChilds = document.body.querySelectorAll(
//         `.slick-slide[data-index='${temp}'] .animated`
//       );
//       // console.log('beforeChangeEvent', temp);
//       SliderNodeChilds.forEach((nodeChild) => {
//         let animationIn = nodeChild.dataset.animationIn;
//         //  console.log(animationIn);
//         nodeChild.classList.remove(animationIn);
//       });
//     }
//   }

//   return (
//     <React.Fragment>
//       <div className='banner__slider'>
//         <Slider
//           className='slider'
//           {...settings}
//           afterChange={afterChangeEvent}
//           beforeChange={beforeChangeEvent}
//           ref={sliderRef}
//         >
//           <div className='slide'>
//             <div className='slide__img'>
//               <img
//                 src='https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
//                 alt=''
//                 className='full-image animated zoomInImage'
//                 data-animation-in='zoomInImage'
//               />
//             </div>

//             <div className='slide__content '>
//               <div className='slide__content--headings text-center'>

//                 <p
//                   className='animated top-title fadeInUp'
//                   data-animation-in='fadeInUp'
//                   data-animation-out='fadeOutDown'
//                   data-delay-in='0.3'
//                 >
//                   Welcome to Shareat restaurant
//                 </p>
//                 <h2
//                   className='animated title fadeInUp'
//                   data-animation-in='fadeInUp'
//                   data-animation-out='fadeOutDown'
//                 >
//                   Let Enjoy The Rhym Of Fooday Dishes
//                 </h2>
//                 <button
//                   className='btn-light btn button-custom animated fadeInUp'
//                   data-animation-in='fadeInUp'
//                   data-animation-out='fadeOutDown'
//                 >
//                   Our menu
//                 </button>
//               </div>
//             </div>{' '}
//           </div>
//           <div className='slide'>
//             <div className='slide__img'>
//               <img
//                 src='https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
//                 alt=''
//                 className='full-image animated'
//                 data-animation-in='zoomInImage'
//               />
//             </div>

//             <div className='slide__content slide__content__right'>
//               <div className='slide__content--headings text-right'>

//                 <p
//                   className='animated top-title'
//                   data-animation-in='fadeInLeft'
//                   data-animation-out='fadeOutRight'
//                   data-delay-in='0.2'
//                 >
//                   Wish you have good food at our restaurant
//                 </p>
//                 <h2
//                   className='animated title'
//                   data-animation-in='fadeInLeft'
//                   data-animation-out='fadeOutRight'
//                 >
//                   Experience the food
//                 </h2>
//                 <button
//                   className='btn-success btn button-custom animated text-white'
//                   data-animation-in='fadeInUp'
//                   data-animation-out='fadeOutDown'
//                 >
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className='slide'>
//             <div className='slide__img'>
//               <img
//                 src='https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
//                 alt=''
//                 className='full-image animated'
//                 data-animation-in='zoomInImage'
//               />
//             </div>
//             <div className='slide__content slide__content__left'>
//               <div className='slide__content--headings text-left'>

//                 <p
//                   className='animated top-title'
//                   data-animation-in='fadeInRight'
//                   data-animation-out='fadeOutLeft'
//                   data-delay-in='0.2'
//                 >
//                   Purchase today. just $76
//                 </p>
//                 <h2
//                   className='animated title'
//                   data-animation-in='fadeInRight'
//                   data-animation-out='fadeOutLeft'
//                 >
//                   SUPER DEAL LUNCH
//                 </h2>
//                 <button
//                   className='btn-light btn button-custom animated'
//                   data-animation-in='fadeInUp'
//                   data-animation-out='fadeOutDown'
//                 >
//                   Today's Menu
//                 </button>
//               </div>
//             </div>
//           </div>{' '}
//         </Slider>
//       </div>
//     </React.Fragment>
//   );
// };

// export default MainSlider;

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { listServices } from '../../../actions/serviceAction';
import './mainSlider.css';

class CitiesSlider extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 6000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
      <div className={`slider ${sliderReady ? 's--ready' : ''}`}>
        <div className='slider__slides'>
          {this.props.slides.map((slide, index) => (
            <div
              className={`slider__slide ${
                activeSlide === index ? 's--active' : ''
              } ${prevSlide === index ? 's--prev' : ''}`}
              key={slide.city}
            >
              <div className='slider__slide-content'>
                {/* <h3 className='slider__slide-subheading'>
                   {slide.city}
                </h3> */}
                <h2 className='slider__slide-heading'>
                  {slide.city.split('').map((l) => (
                    <span>{l}</span>
                  ))}
                </h2>
                <Link href={`/services/${slide.slug}`}>
                <p className='slider__slide-readmore'>read more</p>
                </Link>
              </div>
              <div className='slider__slide-parts'>
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                  <div className='slider__slide-part' key={i}>
                    <div
                      className='slider__slide-part-inner'
                      style={{ backgroundImage: `url(${slide.img})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className='slider__control'
          onClick={() => this.changeSlides(-1)}
        />
        <div
          className='slider__control slider__control--right'
          onClick={() => this.changeSlides(1)}
        />
      </div>
    );
  }
}

const slides = [
  {
    city: 'Paris',
    country: 'France',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
  },
  {
    city: 'Singapore',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
  },
  {
    city: 'Moscow',
    country: 'Russia',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
  },
];

const MainSlider = () => {
  const [servicesList, setServicesList] = useState([]);
  
  useEffect(() => {
    loadServicesList();
  }, []);

  const loadServicesList = () => {
    listServices().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        let i=0;
        let tempServiceList = [];
        for(i;i<data.length;i++)
        {
          let tempData = {};
          tempData.city = data[i].name;
          tempData.img = data[i].photo;
          tempData.slug = data[i].slug;
          tempServiceList.push(tempData);

        }
      //  console.log(tempServiceList);
        setServicesList(tempServiceList);
      }
    });
  };
  return (
    <div>
      <CitiesSlider slides={servicesList} />
    </div>
  );
};

export default MainSlider;
