import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../../actions/authAction';
import {
  listCategories,
  removeCategory,
} from '../../../actions/categoryAction';

const CategoriesListComponent = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [message, setMessage] = useState('');
  const token = getCookie('token');

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

  const deleteConfirm = (slug) => {
    let answer = window.confirm('Are you sure you want to delete your blog');
    if (answer) {
      removeCategory(slug, token).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setMessage(data.message);
          loadCategoriesList();
        }
      });
    }
  };

  const showServiceCategory = (services) => {
    return services.map((service, index) => (
      <p key={index} style={{display:'inline-block'}}>{service.name}</p>
    ));
  };
  const showCategoriesList = () => {
    return categoriesList.map((category, index) => (
      <div className='row mx-0'>
        <div className='col-4'>
          <img src={category.photo} alt={category.photo} width={200} height={200}/>
        </div>
        <div className='col-6 my-auto'>
          {' '}
          <div></div>
          <h3 className='text-dark text-decoration-none'>Name: {category.name}</h3>
          <h5>Desc: {category.categoryDesc}</h5>
          <h5>Services: {showServiceCategory(category.services)}</h5>
        </div>
        <div className='col-2 my-auto'>
          <button
            className=' btn btn-sm btn-danger'
            onClick={() => {
              deleteConfirm(category.slug);
            }}
          >
            Delete
          </button>
          <Link href={`/admin/update/category/${category.slug}`}>
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
            {showCategoriesList()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoriesListComponent;

/*  <div className={index === 0 ? 'mt-3' : 'mt-5'} key={index}>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <h3 className='text-dark text-decoration-none'>{blog.title}</h3>
          </a>
        </Link>
        <p className='mark'>
          Written by {blog.postedBy.name} | Published on{' '}
          {moment(blog.updatedAt).format('MMMM Do YYYY')}
        </p>
        <button
          className='btn btn-sm btn-danger'
          onClick={() => {
            deleteConfirm(blog.slug);
          }}
        >
          Delete
        </button>
        <Link href={`/admin/update/blog/${blog.slug}`}>
          <a className='ml-5 btn btn-sm btn-warning'>
            Update
          </a>
        </Link>
      </div>
     */
