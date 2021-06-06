import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../../actions/authAction';
import {
  listServices,
  removeService,
} from '../../../actions/serviceAction';

const ServicesListComponent = () => {
  const [servicesList, setServicesList] = useState([]);
  const [message, setMessage] = useState('');
  const token = getCookie('token');

  useEffect(() => {
    loadServicesList();
  }, []);

  const loadServicesList = () => {
    listServices().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setServicesList(data);
      }
    });
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm('Are you sure you want to delete your blog');
    if (answer) {
      removeService(slug, token).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setMessage(data.message);
          loadServicesList();
        }
      });
    }
  };

  const showSingleServices = (singleServices) => {
    console.log(singleServices)
    return singleServices.map((singleService, index) => (
      <p key={index} style={{display:'inline-block'}}>{singleService.name}</p>
    ));
  };

  const showServicesList = () => {
    return servicesList.map((service, index) => (
      <div className='row mx-0'>
        <div className='col-4'>
          <img src={service.photo} alt={service.photo} width={200} height={200}/>
        </div>
        <div className='col-6 my-auto'>
          {' '}
          <div></div>
          <h3 className='text-dark text-decoration-none'>Name: {service.name}</h3>
          <h5>Desc: {service.description}</h5>
          <h5>Single Services: {showSingleServices(service.singleServices)}</h5>
        </div>
        <div className='col-2 my-auto'>
          <button
            className=' btn btn-sm btn-danger'
            onClick={() => {
              deleteConfirm(service.slug);
            }}
          >
            Delete
          </button>
          <Link href={`/admin/update/service/${service.slug}`}>
            <a className='ml-2 btn btn-sm btn-warning'>Update</a>
          </Link>
        </div>
      </div>
    ));
  };
  return (
    <React.Fragment>
      <div className='container mt-5'>
        <div className='row mx-auto'>
          <div className='col-md-12'>
            {message && <div className='alert alert-warning'>{message}</div>}
            {showServicesList()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesListComponent;

