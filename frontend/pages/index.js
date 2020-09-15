import React, { useEffect, useRef } from 'react';
import MainSlider from '../components/index_components/mainSlider/mainSlider';
import Layout from '../components/Layout';
import Service from '../components/index_components/services/service';
import Projects from '../components/index_components/projects/projects';
import About from '../components/index_components/criteria_and_about/about';
import Testimonial from '../components/index_components/testimonial_and_request/testimonial';
import Footer from '../components/footer/footer';

const index = () => {
  return (
    <React.Fragment>
      <Layout>
        <MainSlider />
        <About />
        <Service />
        <Projects />
        <Testimonial />
        <Footer />
      </Layout>
    </React.Fragment>
  );
};

export default index;
