import React from 'react';
import { Fade } from 'react-reveal';
import './serviceOverview.css';
import renderHtml  from 'react-render-html';

const ServiceOverview = (props) => {
  return (
    <React.Fragment>
      <div className='single-service-overview container'>
        <div className='full-width-overview__wrapper'>
          <Fade top>
            <article className='full-width-content__content '>
              <h4 className='overview-content__title'>Overview</h4>
              <h2>{props.service.overviewTitle}</h2>
              {renderHtml(props.service.overviewDesc)}
              {/* <h2>Accommodating your programme requirements</h2>
              <p>
                Bathrooms are a hub of activity, and you need everything to
                work: outlets, faucets, toilets, showers, tubs, showerheads and
                moisture-removing venting fans. Whatever the project is that you
                need completed, we promise to arrive on time and perform quality
                workmanship that's guaranteed to your satisfaction.
              </p>
              <p>
                Whether you want to transform a little used space into a
                beautiful, functional oasis, or add the perfect finishing
                touches to your bathroom, Homeservice Club™ Contractors are
                ready to take on your bathroom repairs and renovations to give
                your space the elegant, complete look you’ve always wanted.
              </p> */}
            </article>
          </Fade>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServiceOverview;
