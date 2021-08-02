import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './testimonial.css';
import RequestForm from './request-form';

const Testimonial = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  let countActive = 0;
  const typewriter = (
    index,
    h5text,
    ptext,
    h6text,
    h5textCount = 0,
    ptextCount = 0,
    h6textCount = 0
  ) => {
    //   console.log(e.currentTarget)
    //let currentTarget = e.currentTarget;

    let currentTarget = document.getElementById(`testimonial-img-${index}`);
    if (!currentTarget.classList.contains('noevent')) {
      currentTarget.classList += ' noevent ';
    }

    let checkItemActive = document
      .getElementById(`testimonial-img-${index}`)
      .classList.contains('active-item');
    if (checkItemActive) return;
    let h5textLength = h5text.length;
    let ptextLength = ptext.length;
    let h6textLength = h6text.length;
    if (h5textCount < h5textLength) {
      document.getElementById(`h5-writter-${index}`).innerHTML +=
        h5text.charAt(h5textCount);
      h5textCount++;
      setTimeout(function () {
        typewriter(
          index,
          h5text,
          ptext,
          h6text,
          h5textCount,
          ptextCount,
          h6textCount
        );
      }, 20);
    } else if (ptextCount < ptextLength) {
      document.getElementById(`p-writter-${index}`).innerHTML +=
        ptext.charAt(ptextCount);
      ptextCount++;
      setTimeout(function () {
        typewriter(
          index,
          h5text,
          ptext,
          h6text,
          h5textCount,
          ptextCount,
          h6textCount
        );
      }, 20);
    } else if (h6textCount < h6textLength) {
      document.getElementById(`h6-writter-${index}`).innerHTML +=
        h6text.charAt(h6textCount);
      h6textCount++;
      setTimeout(function () {
        typewriter(
          index,
          h5text,
          ptext,
          h6text,
          h5textCount,
          ptextCount,
          h6textCount
        );
      }, 20);
      if (h6textLength - h6textCount == 1) {
        document.getElementById(`testimonial-img-${index}`).classList +=
          'active-item';
        countActive++;
        if (countActive === 3) {
          document.getElementById(`testimonial-title-id`).classList +=
            ' testimonial-title-active';
        }
      }
    }
  };
  const DUMMY_TESTIMONIAL = [
    {
      h5text: 'Fast, quality and trustworthy service',
      ptext:
        'Dao and Tu were very professional, timely and efficient. I have used contractors in the past and find this is a much better and less frustrating way to get home renovations completed to my satisfaction. I would definitely recommend D.C Finisher to my friends and family. ',
      h6text: 'Karen R. - Erie St. Windsor ',
      imgSrc:
        'http://shtheme.net/demosd/handylexo5/wp-content/uploads/2018/10/testimonial3.jpg',
    },
    {
      h5text: 'Free estimate, Free design and Elegant style.',
      ptext:
        'Dao has already completed two different jobs for us. In each case, the work was high quality, on time and within budget. They kept us well informed and maintained a clean and safe work site throughout the process. They went far beyond our expectations with brilliant new design ideas for the interior. Nice!”',
      h6text: 'Mike D. - Niagara St. Windsor ',
      imgSrc:
        'http://shtheme.net/demosd/handylexo5/wp-content/uploads/2018/10/testimonial1.jpg',
    },
    {
      h5text: 'Quick response and reasonable price',
      ptext:
        "Great service and exceptional work and competitive pricing. The workmanship that Dao performed couldn't have been done better by even the builders. Highly recommended. No need to search elsewhere.",
      h6text: 'D. Pearce - Cambpell Ave. Windsor ',
      imgSrc:
        'http://shtheme.net/demosd/handylexo5/wp-content/uploads/2018/10/testimonial2.jpg',
    },
  ];

  return (
    <React.Fragment>
      <div className='testimonial-and-request-container '>
        <h1 className='testimonial-title' id='testimonial-title-id'>
          Testimonial
        </h1>
        <div className='row mx-0'>
          {DUMMY_TESTIMONIAL &&
            DUMMY_TESTIMONIAL.map((testimonial, index) => (
              <div key={index} className='col-12 col-md-4 testimonial-item '>
                {' '}
                <div
                  className='testimonial-img-slider '
                  id={`testimonial-img-${index}`}
                  onMouseEnter={() =>
                    typewriter(
                      index,
                      testimonial.h5text,
                      testimonial.ptext,
                      testimonial.h6text
                    )
                  }
                >
                  <div className='testimonial-img-wrapper'>
                    <img src={testimonial.imgSrc} alt='' />
                  </div>
                </div>
                <div className='type-writter wrapper testimonial-slider__caption'>
                  <h5 id={`h5-writter-${index}`}></h5>
                  <p id={`p-writter-${index}`}></p>

                  <h6>
                    <p id={`h6-writter-${index}`}></p>
                  </h6>
                </div>
              </div>
            ))}
        </div>
        <div className='container request-form__wrapper'>
          <div className='request-form-banner row mx-auto'>
            <section className='get-in-touch-box'>
              <a href='/contact' className='get-in-touch__btn'>
                <span>
                  <span>
                    <span>
                      <h2>If You Need Help ... Contact Us &amp; Get Quote</h2>

                      <a className='contact-us-btn'>
                        Contact us <i className='fa fa-angle-double-right'></i>
                      </a>
                    </span>
                  </span>
                </span>
              </a>
            </section>
          </div>
        </div>
      </div>
      {/* <section
        className={`hidden-search  ${openRequestForm ? 'open fadeInUp' : ''}`}
      >
        <RequestForm toggleOpenRequestForm={toggleOpenRequestForm} />
      </section> */}
    </React.Fragment>
  );
};

export default Testimonial;
{
  /* <div className='row mx-0'>
          <div className='col-12 col-md-6 testimonial-container'>
            <div className='testimonial_header'>
              <h2>Testimonials</h2>
            </div>
            <div>
              <Slider
                className='testimonial-text-slider'
                asNavFor={nav2}
                arrows={false}
                ref={(c) => setNav1(c)}
               // autoplay={true}
              >
                <div className='testimonial-slider__item '>
                  <div className='testimonial-slider__caption testimonial-text'>
                    <h5>I am very happy with their work</h5>
                    <p>
                      Adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quisno strud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo Ut enim ad minim veniam, quisno strud
                      exercitation ullamco laboris nisi ut aliqui.
                    </p>

                    <h6>
                      <a href='http://shtheme.net/demosd/handylexo5/?testimonial=michale-john-6'>
                        - Michale John
                      </a>
                    </h6>
                  </div>
                </div>

                <div className='testimonial-slider__item '>
                  <div className='testimonial-slider__caption testimonial-text'>
                    <h5>I am very happy with their work</h5>
                    <p>
                      Adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quisno strud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo Ut enim ad minim veniam, quisno strud
                      exercitation ullamco laboris nisi ut aliqui.
                    </p>

                    <h6>
                      <a href='http://shtheme.net/demosd/handylexo5/?testimonial=michale-john-6'>
                        - Michale John
                      </a>
                    </h6>
                  </div>
                </div>

                <div className='testimonial-slider__item '>
                  <div className='testimonial-slider__caption testimonial-text'>
                    <h5>I am very happy with their work</h5>
                    <p>
                      Adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quisno strud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo Ut enim ad minim veniam, quisno strud
                      exercitation ullamco laboris nisi ut aliqui.
                    </p>

                    <h6>
                      <a href='http://shtheme.net/demosd/handylexo5/?testimonial=michale-john-6'>
                        - Michale John
                      </a>
                    </h6>
                  </div>
                </div>
              </Slider>

              <Slider
                className='testimonial-img-slider'
                asNavFor={nav1}
                ref={(c) => setNav2(c)}
                slidesToShow={3}
                focusOnSelect={true}
              >
                <div className='slide-img-item'>
                  <img
                    src='http://shtheme.net/demosd/handylexo5/wp-content/uploads/2018/10/testimonial3.jpg'
                    alt=''
                  />
                </div>
                <div className='slide-img-item'>
                  <img
                    src='http://shtheme.net/demosd/handylexo5/wp-content/uploads/2018/10/testimonial2.jpg'
                    alt=''
                  />
                </div>
                <div className='slide-img-item'>
                  <img
                    src='http://shtheme.net/demosd/handylexo5/wp-content/uploads/2018/10/testimonial1.jpg'
                    alt=''
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className='col-12 col-md-6 request-container'>
            <div className='testimonial_header'>
              <h2>Request A Quote</h2>
            </div>
            <div className='request-form-container'>
              <form
                action=''
                method='post'
                className='request-form'
                novalidate='novalidate'
              >
                <div className='row mx-0'>
                  <span className='request-form__wrap'>
                    <input
                      type='text'
                      name='your-name'
                      value=''
                      size='40'
                      className='request-form__name-input form-control'
                      id='name'
                      aria-required='true'
                      aria-invalid='false'
                      placeholder='Name'
                    />
                  </span>
                  <span className='request-form__wrap'>
                    <input
                      type='email'
                      name='your-email'
                      value=''
                      size='40'
                      className='request-form__email-input form-control'
                      id='email'
                      aria-required='true'
                      aria-invalid='false'
                      placeholder='Email*'
                    />
                  </span>
                  {/* <div className='row'>
                    <div className='col-sm-6'>
                      <span className='request-form__wrap'>
                        <div className='btn-select__wrap form-control'>
                        <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
                        </div>
                      </span>
                    </div>
                    <div className='col-sm-6'>
                      <span className='request-form__wrap'>
                        <input
                          type='text'
                          name='your-subject'
                          value=''
                          size='40'
                          className='request-form__subject-input form-control'
                          aria-required='true'
                          aria-invalid='false'
                          placeholder='Subject'
                        />
                      </span>
                    </div>
                  </div>
                 
                  <span className='request-form__wrap'>
                  <textarea
                    name='your-message'
                    cols='40'
                    rows='10'
                    className='request-form__message-input form-control'
                    aria-required='true'
                    aria-invalid='false'
                    placeholder='Message'
                  ></textarea>
                </span>
                <br />
                <input
                  type='submit'
                  value='CONTACT US'
                  className='wpcf7-form-control wpcf7-submit fa fa-angle-double-right'
                />
               
            </div>
          </form>
        </div>
      </div>
    </div> */
}
