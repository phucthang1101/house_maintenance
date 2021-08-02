import React from 'react';
import './service.css';
import { useState, useEffect } from 'react';
import { listCategories } from '../../../actions/categoryAction';
import Link from 'next/link';
import { Fade } from 'react-reveal';

const Service = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    loadCategoriesList();
  }, []);

  const loadCategoriesList = () => {
    listCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategoriesList(data);
      }
    });
  };

  const serviceItemSlideDown = (e) => {
    //  console.log(e.currentTarget);

    let serviceItem = e.currentTarget;

    serviceItem.classList.toggle('service-item-active');

    var serviceItemExcerpt = document.querySelector(
      '#' + serviceItem.id + ' .service-item__excerpt'
    );
    var serviceItemExcerpt1 = document.querySelector('#service-item-1');
    //  console.log(serviceItemExcerpt1.style.zIndex);
    //  console.log(serviceItemExcerpt);
    if (serviceItemExcerpt.style.maxHeight) {
      serviceItemExcerpt.style.maxHeight = null;
    } else {
      //console.log(serviceItemExcerpt.scrollHeight);
      serviceItemExcerpt.style.maxHeight =
        serviceItemExcerpt.scrollHeight + 'px';
    }
  };

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  }

  const renderCategoryArea = () => {
    return categoriesList.map((category, index) => {
      let test;

      if (index === 0) {
        return <Fade left key={index}>{renderCategoryContent(category,index)}</Fade>;
      }
      if (index === 1) {
        return <Fade bottom key={index}>{renderCategoryContent(category,index)}</Fade>;
      }
      if (index === 2) {
        return <Fade right key={index}>{renderCategoryContent(category,index)}</Fade>;
      }
    });
  };

  const renderCategoryContent = (category,index) => {
    return (
      <div
       
        className='col-12 col-md-4 service-item'
        id={`service-item-${index + 1}`}
        style={{ backgroundImage: `url(${category.photo})` }}
        onMouseEnter={(e) => serviceItemSlideDown(e)}
        onMouseLeave={(e) => serviceItemSlideDown(e)}
      >
        <div className='service-item__overlay'></div>
        <div className='table-center'>
          <div className='table-center__cell'>
            <div className='service-item__content'>
              <h2>
                <a href='/services'>{category.name}</a>
              </h2>
              <div className='service-item__excerpt'>
                <p className='intro'>
                  {truncateString(category.categoryDesc, 80)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='service-item__links'>
          {category.services.map((service, index) => {
            return (
              <div key={index} className='link-wrapper'>
                <Link href={`/services/${service.slug}`}>
                  <a>
                    {service.name} <span className='ti-arrow-right'></span>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className='container-fluid service-container'>
        <div className='title-wrapper'>
          <h1 className='service-title'>Services</h1>
          <h3 className='service-subtitle'>House Repairing & Maintenance</h3>
        </div>

        <div className='row mx-5 service-collection'>
          {renderCategoryArea()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Service;
