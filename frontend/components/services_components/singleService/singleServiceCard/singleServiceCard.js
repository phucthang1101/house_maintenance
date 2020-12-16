import React from 'react';
import './singleServiceCard.css';
import renderHtml from 'react-render-html';
import Fade from 'react-reveal/Fade';

const SingleServiceCard = (props) => {
  let randomBackground =
    'https://i.pinimg.com/originals/3b/4f/fc/3b4ffc029bd9e8fea5dabe54406da1e0.jpg';

  return (
    <React.Fragment>
      <div
        className='single-service-wrapper row mx-0'
        style={{ flexDirection: props.number % 2 == 0 ? 'row-reverse' : 'row' }}
      >
        <Fade left>
          <div
            className='col-12 col-md-6 single-service__half half-image px-0'
            style={{
              backgroundSize: 'cover',
              backgroundImage: `url(${props.singleService.backgroundImageURL})`,
            }}
          ></div>
        </Fade>
        <Fade right>
          <div className='col-12 col-md-6 single-service__half half-content px-0'>
            <div
              className='negative-margin'
              style={{
                background: props.number % 2 != 0 ? '#292A2E' : 'white',
                color: props.number % 2 != 0 ? '#A4A4A4' : '#323337',
                marginBottom: props.lastCard ? '-70px' : '0',
              }}
            >
              <div className='content-wrapper'>
                {renderHtml(props.singleService.content)}
                {/* <h2 className='mt-0'>New shower door installation</h2>
              <p className='main-content'>
                Custom shower doors are a great way to dramatically upgrade your
                bathroom without the dramatic price. Whether you need a framed
                or frameless design, pivot or slider, our experts will work with
                you to create a solution that fits your style.
              </p>
              <h2>Tub to Shower Conversion Installation</h2>
              <p className='main-content'>
              Whether you’re looking to dramatically update your bathroom or simply give it a refresh, our custom manufactured tub liners and shower liners fit like a glove over your old bathtub, shower and walls. Or, consider Walk-In Tub or CleanCut Tub Installation for better accessibility and safety.
              </p> */}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default SingleServiceCard;
