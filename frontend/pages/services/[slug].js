import React, { useEffect, useRef } from 'react';
import GetInTouchSection from '../../components/getInTouchSection/getInTouchSection';
import Layout from '../../components/Layout';
import ServicesBanner from '../../components/services_components/servicesBanner/servicesBanner';
import ServiceOverview from '../../components/services_components/singleService/serviceOverview/serviceOverview';
import SingleServiceCard from '../../components/services_components/singleService/singleServiceCard/singleServiceCard';

const SingleService = () => {
  const controlSwitch = useRef();
  // console.log('index')

  const changeMenuBg = () => {
    const position = window.pageYOffset;
    const { offsetTop } = controlSwitch.current;
    if (position > offsetTop) {
      document
        .querySelector('.site-header__controls')
        .classList.add('has-background');
    } else {
      document
        .querySelector('.site-header__controls')
        .classList.remove('has-background');
    }
    // console.log('offsetTop: ', offsetTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeMenuBg, { passive: true });

    return () => {
      window.removeEventListener('scroll', changeMenuBg);
    };
  }, []);

  const DUMMY_BATHROOM = {
    name: 'bathroom',
    background:
      'https://www.stortford-interiors.com/wp-content/uploads/2018/01/16-Header.jpg',
    overviewTitle: 'Accommodating your programme requirements',
    overviewDesc: `  <p>
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
        </p>`,
    singleServices: [
      {
        backgroundImageURL: '/static/images/bathroom_single_service1.jpg',
        content: `<h2>New shower door installation</h2>
                        <p>
                          Custom shower doors are a great way to dramatically upgrade your
                          bathroom without the dramatic price. Whether you need a framed
                          or frameless design, pivot or slider, our experts will work with
                          you to create a solution that fits your style.
                        </p>
                        <h2>Tub to Shower Conversion Installation</h2>
                        <p>
                        Whether you’re looking to dramatically update your bathroom or simply give it a refresh, our custom manufactured tub liners and shower liners fit like a glove over your old bathtub, shower and walls. Or, consider Walk-In Tub or CleanCut Tub Installation for better accessibility and safety.
                        </p>`,
      },
      {
        backgroundImageURL: '/static/images/bathroom_single_service2.jpg',
        content: `<h2>Vanity & Mirror Installation</h2>
                        <p>
                        You have the new vanity picked out. Whether it’s been delivered or it’s waiting to be picked up from the store, we can take it from there. We can remove and dispose of your current vanity, prepare the space for new dimensions, expertly install the vanity and even integrate the plumbing. Just one simple phone call and no hassle.
                        </p>
                        <h2>Toilet Repair & Installation</h2>
                        <p>
                        Replacing your old toilet is a great way to refresh your entire bathroom. Mr. Handyman is also well equipped to repair your existing toilet – whether it needs a new wax ring, tank flapper or flush valve. Mr. Handyman is the one-call solution to all of your toilet repair and installation needs.
                        </p>`,
      },
      {
        backgroundImageURL: '/static/images/bathroom_single_service3.jpg',
        content: `<h2>Plumbing Service</h2>
                        <p>
                       We offers Plumbing Services for help with faucet, toilet, and garbage disposal installations. If you're looking to upgrade one of these alone, you can browse our plumbing products online and ask an associate in your local store about adding installation.
                        </p>
                        <h2>Caulking</h2>
                        <p>
                        Tubs with bad caulking let water go behind walls and under the floors, damaging wood and wallboard and even the basement or downstairs ceiling. Restore the looks of your tub, stop water damage and prevent mold with professional caulking service from experienced home improvement professionals.
                        </p>`,
      },
    ],
  };

  const renderSingleServiceCard = () => {
    return DUMMY_BATHROOM.singleServices.map((singleService, index) => {
      return (
        <SingleServiceCard
          number={index + 1}
          singleService={singleService}
          lastCard={index+1 == DUMMY_BATHROOM.singleServices.length}
        />
      );
    });
  };
  return (
    <React.Fragment>
      <Layout>
        <ServicesBanner service={DUMMY_BATHROOM} />
        <div ref={controlSwitch} className='controls-switch'></div>
        <ServiceOverview service={DUMMY_BATHROOM} />
        {renderSingleServiceCard()}
        <GetInTouchSection />
      </Layout>
    </React.Fragment>
  );
};

export default SingleService;
