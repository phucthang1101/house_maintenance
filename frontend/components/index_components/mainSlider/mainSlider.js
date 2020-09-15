import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './mainSlider.css';

const SampleNextArrow = (props) => {
  const { className, style } = props;
  const handleClick = (e) => {
    e.preventDefault();
    let arrowBtn = e.currentTarget;
    if (!arrowBtn.classList.contains('animate')) {
      arrowBtn.classList.add('animate');
      setTimeout(() => {
        arrowBtn.classList.remove('animate');
      }, 1600);
    }

    props.handleArrowClick('next');
  };
  return (
    <div className='slick-nav next-arrow' id='slick-nav' onClick={handleClick}>
      <i></i>
      <svg>
        <use xlinkHref='#circle' />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style } = props;
  const handleClick = (e) => {
    e.preventDefault();
    let arrowBtn = e.currentTarget;
    if (!arrowBtn.classList.contains('animate')) {
      arrowBtn.classList.add('animate');
      setTimeout(() => {
        arrowBtn.classList.remove('animate');
      }, 1600);
    }
    props.handleArrowClick('pre');
  };

  return (
    <div className='slick-nav prev-arrow' id='slick-nav' onClick={handleClick}>
      <i></i>
      <svg>
        <use xlinkHref='#circle' />
      </svg>
    </div>
  );
};

const MainSlider = () => {
  const sliderRef = useRef(null);

  const arrowClick = (side) => {
    if (side == 'next') {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    lazyLoad: 'progressive',
    arrows: true,
    dots: false,
    fade: true,
    infinite: true,
    dots: true,
    speed: 900,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    prevArrow: <SamplePrevArrow handleArrowClick={arrowClick} />,
    nextArrow: <SampleNextArrow handleArrowClick={arrowClick} />,
  };

  function afterChangeEvent(currentSlide) {
    let SliderNodeChilds = document.body.querySelectorAll(
      `.slick-current[data-index='${currentSlide}'] .animated`
    );
    //  console.log('afterChangeEvent')
    SliderNodeChilds.forEach((nodeChild) => {
      let animationIn = nodeChild.dataset.animationIn;
      //    console.log(animationIn);
      nodeChild.classList.add(animationIn);
    });
    let preSlideIndex;
    if (currentSlide == 0) preSlideIndex = 2;
    else preSlideIndex = currentSlide - 1;

    let PreSliderNodeChilds = document.body.querySelectorAll(
      `.slick-slide[data-index='${preSlideIndex}'] .animated`
    );
    PreSliderNodeChilds.forEach((preNodeChild) => {
      let animationOut = preNodeChild.dataset.animationOut;
      preNodeChild.classList.remove(animationOut);
    });

    let PreSlideImg = document.body.querySelectorAll(
      `.slick-slide[data-index='${preSlideIndex}'] .full-image`
    );
    // console.log(preSlideIndex,PreSlideImg);
    PreSlideImg[0].classList.remove('zoomFadeOut');
  }

  function beforeChangeEvent(currentSlide) {
    let SliderNodeChilds = document.body.querySelectorAll(
      `.slick-current[data-index='${currentSlide}'] .animated`
    );
    //  console.log('beforeChangeEvent')
    SliderNodeChilds.forEach((nodeChild) => {
      let animationIn = nodeChild.dataset.animationIn;
      let animationOut = nodeChild.dataset.animationOut;
      //  console.log(animationIn);
      nodeChild.classList.remove(animationIn);
      nodeChild.classList.add(animationOut);
    });

    let SlideImg = document.body.querySelectorAll(
      `.slick-current[data-index='${currentSlide}'] .full-image`
    );
    // console.log(SlideImg, SlideImg[0].classList);
    SlideImg[0].classList.add('zoomFadeOut');

    if (currentSlide == 0) {
      let temp = currentSlide + 3;
      let SliderNodeChilds = document.body.querySelectorAll(
        `.slick-slide[data-index='${temp}'] .animated`
      );
      // console.log('beforeChangeEvent', temp);
      SliderNodeChilds.forEach((nodeChild) => {
        let animationIn = nodeChild.dataset.animationIn;
        //  console.log(animationIn);
        nodeChild.classList.remove(animationIn);
      });
    }
  }

  return (
    <React.Fragment>
      <div className='banner__slider'>
        <Slider
          className='slider'
          {...settings}
          afterChange={afterChangeEvent}
          beforeChange={beforeChangeEvent}
          ref={sliderRef}
        >
          <div className='slide'>
            <div className='slide__img'>
              <img
                src='https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                alt=''
                className='full-image animated zoomInImage'
                data-animation-in='zoomInImage'
              />
            </div>
            <div className='slide__content '>
              <div className='slide__content--headings text-center'>
                <p
                  className='animated top-title fadeInUp'
                  data-animation-in='fadeInUp'
                  data-animation-out='fadeOutDown'
                  data-delay-in='0.3'
                >
                  Welcome to Shareat restaurant
                </p>
                <h2
                  className='animated title fadeInUp'
                  data-animation-in='fadeInUp'
                  data-animation-out='fadeOutDown'
                >
                  Let Enjoy The Rhym Of Fooday Dishes
                </h2>
                <button
                  className='btn-light btn button-custom animated fadeInUp'
                  data-animation-in='fadeInUp'
                  data-animation-out='fadeOutDown'
                >
                  Our menu
                </button>
              </div>
            </div>{' '}
          </div>
          <div className='slide'>
            <div className='slide__img'>
              <img
                src='https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
                alt=''
                className='full-image animated'
                data-animation-in='zoomInImage'
              />
            </div>
            <div className='slide__content slide__content__right'>
              <div className='slide__content--headings text-right'>
                <p
                  className='animated top-title'
                  data-animation-in='fadeInLeft'
                  data-animation-out='fadeOutRight'
                  data-delay-in='0.2'
                >
                  Wish you have good food at our restaurant
                </p>
                <h2
                  className='animated title'
                  data-animation-in='fadeInLeft'
                  data-animation-out='fadeOutRight'
                >
                  Experience the food
                </h2>
                <button
                  className='btn-success btn button-custom animated text-white'
                  data-animation-in='fadeInUp'
                  data-animation-out='fadeOutDown'
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className='slide__img'>
              <img
                src='https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                alt=''
                className='full-image animated'
                data-animation-in='zoomInImage'
              />
            </div>
            <div className='slide__content slide__content__left'>
              <div className='slide__content--headings text-left'>
                <p
                  className='animated top-title'
                  data-animation-in='fadeInRight'
                  data-animation-out='fadeOutLeft'
                  data-delay-in='0.2'
                >
                  Purchase today. just $76
                </p>
                <h2
                  className='animated title'
                  data-animation-in='fadeInRight'
                  data-animation-out='fadeOutLeft'
                >
                  SUPER DEAL LUNCH
                </h2>
                <button
                  className='btn-light btn button-custom animated'
                  data-animation-in='fadeInUp'
                  data-animation-out='fadeOutDown'
                >
                  Today's Menu
                </button>
              </div>
            </div>
          </div>{' '}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default MainSlider;

// import jQuery from 'jquery';
// import $ from 'jquery';

// const mainSlider = () => {
//   jQuery(document).ready(function ($) {
//     slickAnimation();
//     function slickAnimation() {
//       var currentSlickSlider = $('.slider');
//       console.log(currentSlickSlider);
//       var slickItems = currentSlickSlider.find(
//         '.slick-list .slick-track > div'
//       );
//       var firstSlickItem = currentSlickSlider.find('[data-index="0"]');
//       console.log('slickItems: ', slickItems);
//       console.log('firstSlickItem: ', firstSlickItem);
//       var animatedClass = 'animated';
//       var visible = { opacity: '1' };
//       var hidden = { opacity: '0' };

//       /**
//        * function for setting animationIn and animationOut class
//        * @param obj
//        * @param type
//        * @param animationIn
//        * @param animatedClass
//        * @param visibility
//        */
//       function slickSetAnimationDefault(
//         obj,
//         type,
//         animationIn,
//         animatedClass,
//         visibility
//       ) {
//         visibility = typeof visibility !== 'undefined' ? visibility : false;

//         slickRemoveAnimation(obj, 'delay');
//         slickRemoveAnimation(obj, 'duration');

//         if (type['opacity'] == 1) {
//           obj.addClass(animationIn);
//           obj.addClass(animatedClass);
//         } else {
//           obj.removeClass(animationIn);
//           obj.removeClass(animatedClass);
//         }

//         if (visibility) obj.css(type);
//       }

//       /**
//        * get timeout when delay, duration, delay and duration is set
//        * @param delayIn
//        * @param durationIn
//        * @returns {number}
//        */
//       function getTimeout(delayIn, durationIn) {
//         if (delayIn) {
//           return delayIn * 1000 + 1000;
//         } else if (durationIn) {
//           return durationIn * 1000;
//         } else if (delayIn || durationIn) {
//           return delayIn * 1000 + durationIn * 1000;
//         }
//         return 1000;
//       }

//       /**
//        * add css animations for delay and duration
//        * @param obj
//        * @param animation
//        * @param value
//        */
//       function slickAddAnimation(obj, animation, value) {
//         var delayInAttr = [
//           'animation-' + animation,
//           '-webkit-animation-' + animation,
//           '-moz-animation-' + animation,
//           '-o-animation-' + animation,
//           '-ms-animation-' + animation,
//         ];
//         var delayInAttributes = {};
//         delayInAttr.forEach(function (entry) {
//           delayInAttributes[entry] = value + 's';
//         });
//         obj.css(delayInAttributes);
//       }

//       /**
//        * remove css animations for delay and duration
//        * @param obj
//        * @param animation
//        */
//       function slickRemoveAnimation(obj, animation) {
//         var delayInAttr = [
//           'animation-' + animation,
//           '-webkit-animation-' + animation,
//           '-moz-animation-' + animation,
//           '-o-animation-' + animation,
//           '-ms-animation-' + animation,
//         ];
//         var delayInAttributes = {};
//         delayInAttr.forEach(function (entry) {
//           delayInAttributes[entry] = '';
//         });
//         obj.css(delayInAttributes);
//       }

//       slickItems.each(function () {
//         var slickItem = $(this);

//         slickItem.find('[data-animation-in]').each(function () {
//           var self = $(this);

//           self.css(hidden);

//           var animationIn = self.attr('data-animation-in');
//           var animationOut = self.attr('data-animation-out');
//           var delayIn = self.attr('data-delay-in');
//           var durationIn = self.attr('data-duration-in');
//           var delayOut = self.attr('data-delay-out');
//           var durationOut = self.attr('data-duration-out');

//           if (animationOut) {
//             console.log('animationOut: ', animationOut);
//             if (firstSlickItem.length > 0) {
//               if (slickItem.hasClass('slick-current')) {
//                 slickSetAnimationDefault(
//                   self,
//                   visible,
//                   animationIn,
//                   animatedClass,
//                   true
//                 );

//                 if (delayIn) {
//                   slickAddAnimation(self, 'delay', delayIn);
//                 }
//                 if (durationIn) {
//                   slickAddAnimation(self, 'duration', durationIn);
//                 }

//                 setTimeout(function () {
//                   slickSetAnimationDefault(
//                     self,
//                     hidden,
//                     animationIn,
//                     animatedClass
//                   );
//                   slickSetAnimationDefault(
//                     self,
//                     visible,
//                     animationOut,
//                     animatedClass
//                   );
//                   if (delayOut) {
//                     slickAddAnimation(self, 'delay', delayOut);
//                   }
//                   if (durationOut) {
//                     slickAddAnimation(self, 'duration', durationOut);
//                   }
//                   setTimeout(function () {
//                     slickRemoveAnimation(self, 'delay');
//                     slickRemoveAnimation(self, 'duration');
//                   }, getTimeout(delayOut, durationOut));
//                 }, getTimeout(delayIn, durationIn));
//               }
//             }

//             currentSlickSlider.on('afterChange', function (
//               event,
//               slick,
//               currentSlider
//             ) {
//               if (slickItem.hasClass('slick-current')) {
//                 slickSetAnimationDefault(
//                   self,
//                   visible,
//                   animationIn,
//                   animatedClass,
//                   true
//                 );

//                 if (delayIn) {
//                   slickAddAnimation(self, 'delay', delayIn);
//                 }
//                 if (durationIn) {
//                   slickAddAnimation(self, 'duration', durationIn);
//                 }

//                 setTimeout(function () {
//                   slickSetAnimationDefault(
//                     self,
//                     hidden,
//                     animationIn,
//                     animatedClass
//                   );
//                   slickSetAnimationDefault(
//                     self,
//                     visible,
//                     animationOut,
//                     animatedClass
//                   );

//                   if (delayOut) {
//                     slickAddAnimation(self, 'delay', delayOut);
//                   }
//                   if (durationOut) {
//                     slickAddAnimation(self, 'duration', durationOut);
//                   }
//                   setTimeout(function () {
//                     slickRemoveAnimation(self, 'delay');
//                     slickRemoveAnimation(self, 'duration');
//                   }, getTimeout(delayOut, durationOut));
//                 }, getTimeout(delayIn, durationIn));
//               }
//             });

//             currentSlickSlider.on('beforeChange', function (
//               event,
//               slick,
//               currentSlider
//             ) {
//               slickSetAnimationDefault(
//                 self,
//                 hidden,
//                 animationOut,
//                 animatedClass,
//                 true
//               );
//             });
//           } else {
//             if (firstSlickItem.length > 0) {
//               if (slickItem.hasClass('slick-current')) {
//                 slickSetAnimationDefault(
//                   self,
//                   visible,
//                   animationIn,
//                   animatedClass,
//                   true
//                 );

//                 if (delayIn) {
//                   slickAddAnimation(self, 'delay', delayIn);
//                 }
//                 if (durationIn) {
//                   slickAddAnimation(self, 'duration', durationIn);
//                 }
//               }
//             }
//             console.log('no animationOut: ',slickItem)
//             currentSlickSlider.on('afterChange', function (
//               event,
//               slick,
//               currentSlider
//             ) {
//               if (slickItem.hasClass('slick-current')) {
//                 console.log('slickItemCurrent: ', slickItem);
//                 slickSetAnimationDefault(
//                   self,
//                   visible,
//                   animationIn,
//                   animatedClass,
//                   true
//                 );

//                 if (delayIn) {
//                   slickAddAnimation(self, 'delay', delayIn);
//                 }
//                 if (durationIn) {
//                   slickAddAnimation(self, 'duration', durationIn);
//                 }
//               }
//             });

//             currentSlickSlider.on('beforeChange', function (
//               event,
//               slick,
//               currentSlider
//             ) {
//               slickSetAnimationDefault(
//                 self,
//                 hidden,
//                 animationIn,
//                 animatedClass,
//                 true
//               );
//             });
//           }
//         });
//       });
//       return this;
//     }

//     $('.slick-nav').on('click touch', function (e) {
//       e.preventDefault();

//       var arrow = $(this);

//       if (!arrow.hasClass('animate')) {
//         arrow.addClass('animate');
//         setTimeout(() => {
//           arrow.removeClass('animate');
//         }, 1600);
//       }
//     });
//   });
// };
// export default mainSlider;

// //  {

// //     var sliding = false,
// //         curSlide = 1,
// //         numOfSlides = $(".slider--el").length;

// //     $(document).on("click", ".slider--control", function() {
// //       if (sliding) return;
// //       sliding = true;
// //       $(".slider--el").show();
// //       $(".slider--el").css("top");
// //       $(".slider--el.active").addClass("removed");
// //       ($(this).hasClass("right")) ? curSlide++ : curSlide--;
// //       if (curSlide < 1) curSlide = numOfSlides;
// //       if (curSlide > numOfSlides) curSlide = 1;
// //       $(".slider--el-" + curSlide).addClass("next");

// //       setTimeout(function() {
// //         $(".slider--el.removed").hide();
// //         $(".slider--el").removeClass("active next removed");
// //         $(".slider--el-" + curSlide).addClass("active");
// //         sliding = false;
// //       }, 1800);
// //     });

// //   });
// /*
//  ** With Slick Slider Plugin : https://github.com/marvinhuebner/slick-animation
//  ** And Slick Animation Plugin : https://github.com/marvinhuebner/slick-animation
//  */

// // Init slick slider + animation

// //   $('.slider').slick({
// //     draggable: true,
// //     arrows: true,
// //     dots: false,
// //     fade: true,
// //     speed: 900,
// //     infinite: true,
// //     cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
// //    touchThreshold: 100,
// //     prevArrow:
// //       '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
// //     nextArrow:
// //       '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
// //   }).slickAnimation();
