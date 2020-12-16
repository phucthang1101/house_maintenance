import React from 'react';
import './getInTouchSection.css';
import Fade from 'react-reveal/Fade';

const GetInTouchSection = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <section className='get-in-touch-box'>
          <a href='/contact' className='get-in-touch__btn'>
            <span>
              <span>
                <span>
                  <article className='get-in-touch__content above-absolute-lines'>
                    <h2>Say Hello</h2>
                    <p>Get intouch with us</p>
                    <p className='contact-link__wrapper'>
                      <a className='contact-link' target='' href='/contact/'>
                        Contact
                      </a>
                      <span className='ti-arrow-circle-right'></span>
                    </p>
                  </article>
                </span>
              </span>
            </span>
          </a>
        </section>
      </Fade>{' '}
    </React.Fragment>
  );
};

export default GetInTouchSection;
