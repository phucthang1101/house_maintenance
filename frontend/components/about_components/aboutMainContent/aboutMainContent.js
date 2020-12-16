import React, { useEffect, useRef } from 'react';
import './aboutMainContent.css';
import { Fade } from 'react-reveal';

const AboutMainContent = () => {
  const counters = useRef();
  // console.log('index')

  const animatedAccordion = (e) => {
    var panel = e.target.nextSibling;
    e.target.classList.toggle('panel-active');
    //console.log(e.target.parentElement);

    var contents = document.querySelectorAll('.panel-body');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.maxHeight = null;
    }

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    let panelBodyActive = document.querySelectorAll('.panel-body-active');
    let panelBody = document.querySelectorAll('.panel-body');
    panelBodyActive[0].style.maxHeight = panelBody[0].scrollHeight + 'px';
    //console.log(panelBody);
  }, []);


  const startCounters = () =>{
    const position = window.pageYOffset;
    console.log('kok')
    const { offsetTop } = counters.current;
  
    if (position > offsetTop + 200) {
      const counters = document.querySelectorAll('.counter span');
      //const speed = 500; // The lower the slower

      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          let speed = +counter.getAttribute('data-speed');
          const count = +counter.innerText;
          // const count = +counter.nodeValue;
          // Lower increase to slow and higher to slow
          const increase = target / speed;

          console.log('increase: ', increase);
          //console.log('count: ', count);

          // Check if target is reached
          if (count < target) {
            // Add increase to count and output in counter
            counter.innerText = count + increase;
            // Call function every ms
            if (target < 100) {
              setTimeout(updateCount, 200);
            } else {
              setTimeout(updateCount, 1);
            }
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', startCounters, { passive: true });
    return () => {
      window.removeEventListener('scroll', startCounters);
    };
  }, []);

  return (
    <React.Fragment>
      <div className='main-content__wrapper'>
        <div className=''>
          <div className='row mx-0'>
            <Fade right>
              <div className='col-12 col-md-6 main-content__image px-0'></div>
            </Fade>
            <Fade left>
              <div className='col-12 col-md-6 main-content__text '>
                <div className='content-heading-wrapper'>
                  <div className='heading-subtitle'>
                    <h4>Who we are</h4>
                  </div>
                  <div className='heading-title'>
                    <h2>We have 25 years of experience</h2>
                  </div>
                </div>
                <div className='content-panels__wrapper'>
                  <div className='panel'>
                    <button
                      className='panel-heading panel-active'
                      onClick={(e) => animatedAccordion(e)}
                    >
                      Started Handyman Services in 2017
                    </button>
                    <div className='panel-body  panel-body-active'>
                      <p>
                        11 We work to ensure people’s comfort at their home, and
                        to provide the best and the fastest help at fair prices.
                        We stand for quality, safety and credibility, so you
                        could be sure about our work. Initially we started Now
                        we are proud that we can help people with welding,
                        moving, dry clean pest control.
                      </p>
                    </div>
                  </div>
                  <div className='panel'>
                    <button
                      className='panel-heading panel-active'
                      onClick={(e) => animatedAccordion(e)}
                    >
                      Started Handyman Services in 2017
                    </button>
                    <div className='panel-body'>
                      <p>
                        We work to ensure people’s comfort at their home, and to
                        provide the best and the fastest help at fair prices. We
                        stand for quality, safety and credibility, so you could
                        be sure about our work. Initially we started Now we are
                        proud that we can help people with welding, moving, dry
                        clean pest control.
                      </p>
                    </div>
                  </div>
                  <div className='panel'>
                    <button
                      className='panel-heading panel-active'
                      onClick={(e) => animatedAccordion(e)}
                    >
                      Started Handyman Services in 2017
                    </button>
                    <div className='panel-body'>
                      <p>
                        We work to ensure people’s comfort at their home, and to
                        provide the best and the fastest help at fair prices. We
                        stand for quality, safety and credibility, so you could
                        be sure about our work. Initially we started Now we are
                        proud that we can help people with welding, moving, dry
                        clean pest control.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  ref={counters} 
                  className='content-counters__wrapper counters'
                >
                  <div className='container'>
                    <div className='customer-counter'>
                      <div className='counter'>
                        <span data-target='500' data-speed='500'>
                          0
                        </span>
                      </div>
                      <h3>Customers</h3>
                    </div>
                    <div className='years-counter'>
                      <div className='counter'>
                        <span data-target='15' data-speed='15'>
                          0
                        </span>
                        <p>Years</p>
                      </div>
                      <h3>Experience</h3>
                    </div>
                    <div className='projects-counter'>
                      <div className='counter'>
                        <span data-target='700' data-speed='350'>
                          0
                        </span>
                      </div>
                      <h3>Projects Done</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMainContent;
