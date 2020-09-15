import React, { useState, useEffect, useRef } from 'react';
import './projects.css';
const Projects = () => {
  // store the isotope object in one state
  const [isotope, setIsotope] = React.useState(null);
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = React.useState('*');

  // initialize an Isotope object with configs
  React.useEffect(() => {
    setIsotope(
      new Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      })
    );
  }, []);

  // handling filter key change
  React.useEffect(() => {
    if (isotope) {
      filterKey === '*'
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <React.Fragment>
      <div className='container projects-container'>
        <div className='projects-heading row mx-0'>
          <div className='col-12 col-md-5 projects-heading-left'>
            <h4 className='projects-subtitle'>Recently Completed</h4>
            <h2 className='projects-title'>Our Latest Projects</h2>
          </div>
          <div className='col-12 col-md-7 projects-heading-right'>
            <ul className='projects-list'>
              <li
                className={`projects-list-item ${
                  filterKey === '*' ? 'active' : ''
                }`}
                onClick={() => setFilterKey('*')}
              >
                All
              </li>
              <li
                className={`projects-list-item ${
                  filterKey === 'painting' ? 'active' : ''
                }`}
                onClick={() => setFilterKey('painting')}
              >
                Painting
              </li>
              <li
                className={`projects-list-item ${
                  filterKey === 'plumbing' ? 'active' : ''
                }`}
                onClick={() => setFilterKey('plumbing')}
              >
                plumbing
              </li>
              <li
                className={`projects-list-item ${
                  filterKey === 'flooring' ? 'active' : ''
                }`}
                onClick={() => setFilterKey('flooring')}
              >
                flooring
              </li>
              <li
                className={`projects-list-item ${
                  filterKey === 'electrical' ? 'active' : ''
                }`}
                onClick={() => setFilterKey('electrical')}
              >
                Electrical
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=' container projects-img-container filter-container'>
        <div className='row mx-0'>
          <div className='filter-item single-project '>
            <div className='single-project__item'>
              <a href='#'>
                <div className='single-project__img'>
                  <img
                    src='http://hr-html.axiomthemes.com/images/projects-1-350x252.jpg'
                    alt='Living Room Staircases'
                  />
                </div>
                <div class='single-project__info'>
                  <div class='single-project__info-back'>
                    <h4>Living Room Staircases</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod...{' '}
                    </p>
                    <div class='single-project__link'>View</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='filter-item single-project '>
            <div className='single-project__item'>
              <a href='#'>
                <div className='single-project__img'>
                  <img
                    src='http://hr-html.axiomthemes.com/images/projects-1-350x252.jpg'
                    alt='Living Room Staircases'
                  />
                </div>
                <div class='single-project__info'>
                  <div class='single-project__info-back'>
                    <h4>Living Room Staircases</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod...{' '}
                    </p>
                    <div class='single-project__link'>View</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='filter-item single-project '>
            <div className='single-project__item'>
              <a href='#'>
                <div className='single-project__img'>
                  <img
                    src='http://hr-html.axiomthemes.com/images/projects-1-350x252.jpg'
                    alt='Living Room Staircases'
                  />
                </div>
                <div class='single-project__info'>
                  <div class='single-project__info-back'>
                    <h4>Living Room Staircases</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod...{' '}
                    </p>
                    <div class='single-project__link'>View</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='row mx-0'>
          <div className='filter-item single-project '>
            <div className='single-project__item'>
              <a href='#'>
                <div className='single-project__img'>
                  <img
                    src='http://hr-html.axiomthemes.com/images/projects-1-350x252.jpg'
                    alt='Living Room Staircases'
                  />
                </div>
                <div class='single-project__info'>
                  <div class='single-project__info-back'>
                    <h4>Living Room Staircases</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod...{' '}
                    </p>
                    <div class='single-project__link'>View</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='filter-item single-project '>
            <div className='single-project__item'>
              <a href='#'>
                <div className='single-project__img'>
                  <img
                    src='http://hr-html.axiomthemes.com/images/projects-1-350x252.jpg'
                    alt='Living Room Staircases'
                  />
                </div>
                <div class='single-project__info'>
                  <div class='single-project__info-back'>
                    <h4>Living Room Staircases</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod...{' '}
                    </p>
                    <div class='single-project__link'>View</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='filter-item single-project '>
            <div className='single-project__item'>
              <a href='#'>
                <div className='single-project__img'>
                  <img
                    src='http://hr-html.axiomthemes.com/images/projects-1-350x252.jpg'
                    alt='Living Room Staircases'
                  />
                </div>
                <div class='single-project__info'>
                  <div class='single-project__info-back'>
                    <h4>Living Room Staircases</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod...{' '}
                    </p>
                    <div class='single-project__link'>View</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
   </React.Fragment>
  );
};
export default Projects;
