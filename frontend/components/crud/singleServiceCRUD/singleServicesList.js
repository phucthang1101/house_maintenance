import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../../actions/authAction';
import {
  listSingleServices,
  removeSingleService,
} from '../../../actions/singleServiceAction';

const SingleServicesListComponent = () => {
  const [singleServicesList, setSingleServicesList] = useState([]);
  const [message, setMessage] = useState('');
  const token = getCookie('token');

  useEffect(() => {
    loadSingleServicesList();
  }, []);

  const loadSingleServicesList = () => {
    listSingleServices().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setSingleServicesList(data);
      }
    });
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm('Are you sure you want to delete your blog');
    if (answer) {
      removeSingleService(slug, token).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setMessage(data.message);
          loadSingleServicesList();
        }
      });
    }
  };

  const showSingleServicesList = () => {
    return singleServicesList.map((singleService, index) => (
      <div className='row mx-0'>
        <div className='col-4'>
          <img src={singleService.photo} alt={singleService.photo.name} width={200} height={200}/>
        </div>
        <div className='col-6 my-auto'>
          {' '}
          <div></div>
          <h3 className='text-dark text-decoration-none'>Name: {singleService.name}</h3>
          <h5>Content: {singleService.body}</h5>
        
        </div>
        <div className='col-2 my-auto'>
          <button
            className=' btn btn-sm btn-danger'
            onClick={() => {
              deleteConfirm(singleService.slug);
            }}
          >
            Delete
          </button>
          <Link href={`/admin/update/single-service/${singleService.slug}`}>
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
            {showSingleServicesList()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleServicesListComponent;

