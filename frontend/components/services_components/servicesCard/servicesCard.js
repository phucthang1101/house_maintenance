import React, { useState } from 'react';
import './servicesCard.css';
import { motion, AnimatePresence } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

const ServicesCard = (props) => {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const [serviceNameState, setServiceNameState] = useState('bathroom');
  const turnOnHover = (e) => (e.target.classList += ' hovered');

  const onShowServiceDesc = (name) => {
    setServiceNameState(name);
  };
  const DUMMY_SERVICES = [
    {
      name: 'bathroom',
      desc:
        ' Bathrooms in your home receive some of the most foot traffic in your house. It is critical that every component of it works correctly—from ceiling to floor. Bathrooms in your home receive some of the most foot traffic in your house. It is critical that every component of it works correctly—from ceiling to floor. Bathrooms in your home receive some of the most foot traffic in your house. It is critical that every component of it works correctly—from ceiling to floor.',
    },
    {
      name: 'kitchen',
      desc:
        'The kitchen is the heart of the household. If you would like to finally fix that leaking faucet or install a brand new counter top, we can help. Make your dream kitchen a reality! The kitchen is the heart of the household. If you would like to finally fix that leaking faucet or install a brand new counter top, we can help. Make your dream kitchen a reality!',
    },
    {
      name: 'basement',
      desc:
        'Your basement could be an incredible opportunity to add more storage space to your home or create an extra room for entertaining. No matter your vision, we can help you bring it to life. Your basement could be an incredible opportunity to add more storage space to your home or create an extra room for entertaining. No matter your vision, we can help you bring it to life.',
    },
  ];

  let randomBackground =
    'https://www.stortford-interiors.com/wp-content/uploads/2016/05/service-corefeature.jpg';

  const renderServicesDesc = () => {
    return DUMMY_SERVICES.map((service, index) => {
      //   console.log(service);
      if (service.name === serviceNameState) {
      //  console.log(service.name);
        return (
          <Fade bottom>
            {' '}
            <div
              className='content-wrapper'
              onMouseEnter={turnOnHover}
              onTouchStart={turnOnHover}
            >
              <div className='svg-icon__wrapper'>
                {service.name === 'bathroom' ? (
                  <svg id='Layer_5' viewBox='0 0 64 64'>
                    <g>
                      <path d='m53.68 61-1.341-4.76c-1.36.483-2.816.76-4.339.76s-2.979-.277-4.339-.76l-1.341 4.76h-16.461c-.446-1.722-1.997-3-3.859-3h-3v-9.363c-.965.229-1.966.363-3 .363s-2.035-.134-3-.363v9.363h-3c-1.862 0-3.413 1.278-3.859 3h-6.141v2h64v-2z' />
                      <path d='m37 31v6h22v-10h-22v2h4v2z' />
                      <path d='m61 23h-26-.001l.001 2h26z' />
                      <path d='m61 39h-26-.001l.001 2h26z' />
                      <path d='m48 55c6.065 0 11-4.935 11-11v-1h-22v1c0 6.065 4.935 11 11 11z' />
                      <path d='m5 31h22v2h-22z' />
                      <path d='m5 36c0 6.065 4.935 11 11 11s11-4.935 11-11v-1h-22z' />
                      <path d='m4 21h24c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-24c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3zm11.707-16.707 12 12-1.414 1.414-12-12zm-10 0 12 12-1.414 1.414-12-12z' />
                      <path d='m17 27v-2c0-1.105-.895-2-2-2h-8c-.552 0-1 .448-1 1v1 4h4v-4h5v2z' />
                      <path d='m35 9h2v2h-2z' />
                      <path d='m35 13h2v2h-2z' />
                      <path d='m37 11h2v2h-2z' />
                      <path d='m33 11h2v2h-2z' />
                      <path d='m45 3h2v2h-2z' />
                      <path d='m45 7h2v2h-2z' />
                      <path d='m47 5h2v2h-2z' />
                      <path d='m43 5h2v2h-2z' />
                      <path d='m55 13h2v2h-2z' />
                      <path d='m55 17h2v2h-2z' />
                      <path d='m57 15h2v2h-2z' />
                      <path d='m53 15h2v2h-2z' />
                    </g>
                  </svg>
                ) : service.name === 'basement' ? (
                  <svg viewBox='0 0 512 512.0005'>
                    <path d='m504.804688 201.300781c-7.109376-5.921875-223.359376-186.128906-236-196.664062-7.417969-6.183594-18.191407-6.183594-25.609376 0l-236 196.664062c-4.558593 3.800781-7.195312 9.429688-7.195312 15.367188v275.332031c0 11.046875 8.953125 20 20 20h472c11.046875 0 20-8.953125 20-20v-275.332031c0-5.9375-2.636719-11.566407-7.195312-15.367188zm-32.804688 74.03125h-117.332031v-78h82.890625l34.441406 28.703125zm-432 .667969h38.667969v58.667969c0 11.046875 8.953125 20 20 20h58.667969v58.664062c0 11.046875 8.953124 20 20 20h58.664062v38.667969h-196zm236 196v-58.667969c0-11.042969-8.953125-20-20-20h-58.667969v-58.664062c0-11.046875-8.953125-20-20-20h-58.664062v-58.667969c0-11.046875-8.957031-20-20-20h-58.667969v-9.964844l216-180 133.558594 111.296875h-54.890625c-11.046875 0-20 8.957031-20 20v118c0 11.046875 8.953125 20 20 20h137.332031v156.667969zm0 0' />
                  </svg>
                ) : (
                  <svg viewBox='0 0 512 512.0005'>
                    <g id='outline'>
                      <path d='M392,280a8,8,0,0,0,8-8V256a8,8,0,0,0-16,0v16A8,8,0,0,0,392,280Z' />
                      <path d='M392,328a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V336A8,8,0,0,0,392,328Z' />
                      <path d='M365.659,469.655A23.858,23.858,0,0,0,376,472h96a24.027,24.027,0,0,0,24-24V240a24.027,24.027,0,0,0-24-24H376a24.027,24.027,0,0,0-24,24v40H336V264a8,8,0,0,0-8-8H280a8,8,0,0,0-8,8v16H256V264a7.975,7.975,0,0,0-2.35-5.663A23.875,23.875,0,0,0,256,248h16a8,8,0,0,0,0-16H256a8,8,0,0,0-8-8H200a8,8,0,0,0-8,8v15.983a23.872,23.872,0,0,0,2.35,10.354A7.975,7.975,0,0,0,192,264v16H152V264h8a8,8,0,0,0,0-16h-8v-8a24,24,0,0,0-48,0v16a8,8,0,0,0,16,0V240a8,8,0,0,1,16,0v40H72V264a24,24,0,0,0-48,0v16a8,8,0,0,0-8,8V464a8,8,0,0,0,8,8H360A7.975,7.975,0,0,0,365.659,469.655ZM472,456H376a8.009,8.009,0,0,1-8-8V312H480V448A8.009,8.009,0,0,1,472,456ZM368,240a8.009,8.009,0,0,1,8-8h96a8.009,8.009,0,0,1,8,8v56H368Zm-48,56v32H208V296ZM208,344H320v80H208Zm80-72h32v8H288Zm-80,8v-8h32v8Zm0-40h32v7.983A8.026,8.026,0,0,1,231.983,256H216.017A8.026,8.026,0,0,1,208,247.983ZM40,264a8,8,0,0,1,16,0v16H40ZM352,456H32V296H192V432a8,8,0,0,0,8,8H328a8,8,0,0,0,8-8V296h16Z' />
                      <path d='M280,360H248a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z' />
                      <path d='M168,376H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V384A8,8,0,0,0,168,376Zm-8,48H64V392h96Z' />
                      <path d='M168,312H56a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V320A8,8,0,0,0,168,312Zm-8,32H64V328h96Z' />
                      <path d='M320,104a8,8,0,0,0,8-8V80a8,8,0,0,0-16,0V96A8,8,0,0,0,320,104Z' />
                      <path d='M416,104a8,8,0,0,0,8-8V80a8,8,0,0,0-16,0V96A8,8,0,0,0,416,104Z' />
                      <path d='M24,88H96v32H88a8,8,0,0,0-7.155,4.422l-24,48A8,8,0,0,0,64,184h80a8,8,0,0,0,7.155-11.578l-24-48A8,8,0,0,0,120,120h-8V88H216v32h-8a8,8,0,0,0-7.155,4.422l-24,48A8,8,0,0,0,184,184h80a8,8,0,0,0,7.155-11.578l-24-48A8,8,0,0,0,240,120h-8V88h56v64a8,8,0,0,0,8,8H488a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H24a8,8,0,0,0-8,8V80A8,8,0,0,0,24,88Zm107.056,80H76.944l16-32h22.112Zm120,0H196.944l16-32h22.112ZM304,56h72v64H304V56Zm176,88H304v-8H480Zm0-24H392V56h88ZM32,56H288V72H32Z' />
                      <circle cx='232' cy='312' r='8' />
                      <circle cx='264' cy='312' r='8' />
                      <circle cx='296' cy='312' r='8' />
                    </g>
                  </svg>
                )}
              </div>
              <h2>{service.name}</h2>
              <p className='main-content'>{service.desc}</p>
              <Link href={`/services/${service.name}`}s>
                <a >
                  LEARN MORE
                  <span className='ti-angle-double-right'></span>
                </a>
              </Link>
            </div>
          </Fade>
        );
      }
    });
  };

  return (
    <React.Fragment>
      <div
        className='row mx-0 service-card'
        style={{ flexDirection: props.number % 2 == 0 ? 'row-reverse' : 'row' }}
      >
        <Fade top>
          <div
            className='col-12 col-md-6 px-0 service-card__half image-half'
            style={{
              backgroundSize: 'cover',
              backgroundImage: `url(${randomBackground})`,
            }}
          >
            <div className='services-card-layer'></div>
            <div
              className={`service-image__center__line service-image__center__line--${
                props.number % 2 == 0 ? 'left-up' : 'right-up'
              }`}
            ></div>
            <div
              className={`service-image__center__line service-image__center__line--${
                props.number % 2 == 0 ? 'left-down' : 'right-down'
              }`}
            ></div>
            <div className='service-card__heading'>
              <h2> BY ROOM</h2>
              <p>
                Our specialist core services include drywall, suspended ceilings
                and glass wall. These are delivered by experienced teams, with
                specific expertise. We only work to the highest standards to
                achieve exceptional quality and finish across the services we
                provide.
              </p>
              {DUMMY_SERVICES.map((service, index) => {
                return (
                  <a
                    key={index}
                    onClick={() => onShowServiceDesc(service.name)}
                  >
                    {service.name} <span className='ti-arrow-right'></span>
                  </a>
                );
              })}
            </div>
          </div>
        </Fade>
        <div
          className='col-12 col-md-6 px-0 service-card__half content-half'
          style={{
            background: props.number % 2 == 0 ? '#292A2E' : 'unset',
            color: props.number % 2 == 0 ? '#A4A4A4' : 'unset',
          }}
        >
          {renderServicesDesc()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesCard;
