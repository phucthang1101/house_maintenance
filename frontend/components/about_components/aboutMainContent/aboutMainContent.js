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

         // console.log('increase: ', increase);
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
                    <h2>We have 20 years of experience</h2>
                  </div>
                </div>
                <div className='content-panels__wrapper'>
                  <div className='panel'>
                    <button
                      className='panel-heading panel-active'
                      onClick={(e) => animatedAccordion(e)}
                    >
                     Who is D.C Finisher?
                    </button>
                    <div className='panel-body  panel-body-active'>
                      <p>
                      As a handyman based in Windsor Ontario, D.C Finisher provides various types of renovations and repair jobs, both large and small.From bathroom renovations to painting to odd jobs around your home you can count on us for quality home improvements, repairs, and maintenance
                      </p>
                    </div>
                  </div>
                  <div className='panel'>
                    <button
                      className='panel-heading panel-active'
                      onClick={(e) => animatedAccordion(e)}
                    >
                     Why Choose D.C Finisher for your next home renovation?
                    </button>
                    <div className='panel-body'>
                      <p>
                      Local communities trust our services We offer only the highest quality of service by members of your community who make it our goal on every project to deliver the highest level of satisfaction to our clients.
                      </p>
                    </div>
                  </div>
                  <div className='panel'>
                    <button
                      className='panel-heading panel-active'
                      onClick={(e) => animatedAccordion(e)}
                    >
                      Experience Makes the Difference
                    </button>
                    <div className='panel-body'>
                      <p>
                      Anyone can them-self become a handyman, however a true "handyman" is a tradesman with real experience. That is exactly what you get when you call Mitch Bracken Handyman Services of Windsor. Having performed a lot of projects of house maintenance, you can be sure our staff has the experience to do things right the first time.
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
