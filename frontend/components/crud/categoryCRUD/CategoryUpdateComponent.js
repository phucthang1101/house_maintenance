import React from 'react';
import { withRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { getCookie, isAuth } from '../../../actions/authAction';
import {
  createCategory,
  listCategories,
  removeCategory,
  readCategory,
  updateCategory,
} from '../../../actions/categoryAction';
import { listServices } from '../../../actions/serviceAction';
import { ToastContainer, toast } from 'react-toastify';

toast.configure();

const CategoryUpdateComponent = ({ router }) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const filePickerRef = useRef();

  const [values, setValues] = useState({
    name: '',
    error: '',
    success: '',
    formData: new FormData(),
    categoryDesc: '',
  });
  const { name, error, success, formData, categoryDesc } = values;
  const token = getCookie('token');

  const [services, setServices] = useState([]);
  const [checkedServices, setCheckedServices] = useState([]);

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initServices();
    initCategory();
  }, [router]);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const initCategory = () => {
    if (router.query.slug) {
      readCategory(router.query.slug).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues({ ...values, name: data.name, categoryDesc: data.categoryDesc });
          console.log('service: ',data)
          setServicesArray(data.services);
          setPreviewUrl(data.photo)
        }
      });
    }
  };

  const setServicesArray = (categoryServices)=>{
    let servicesChecked = [];
    categoryServices.map((service,index)=>{
        servicesChecked.push(service);
    })
    setCheckedServices(servicesChecked);
  }

  const initServices = () => {
    listServices().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        console.log(data.error);
      } else {
        setServices(data);
      }
    });
  };

  const handleServiceToggle = (serviceId) => () => {
    setValues({ ...values, error: '' });

    // find categoryId in checkList or return -1
    const clickedServiceId = checkedServices.indexOf(serviceId);
    const all = [...checkedServices];
    if (clickedServiceId === -1) {
      all.push(serviceId);
    } else {
      all.splice(clickedServiceId, 1);
    }
    setCheckedServices(all);
    formData.set('services', all);
  };

  const findServicesChecked = (categoryId) => {
    const result = checkedServices.indexOf(categoryId);
    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const showServices = () => {
    return (
      services &&
      services.map((service, index) => {
        return (
          <li className='list-unstyled' key={index}>
            <input
              onChange={handleServiceToggle(service._id)}
              checked={findServicesChecked(service._id)}
              type='checkbox'
              className='mr-2'
            />
            <label className='form-check-label'>{service.name}</label>
          </li>
        );
      })
    );
  };

  const handleChange = (name) => (e) => {
    const value = name === 'photo' ? e.target.files[0] : e.target.value;
   console.log('obhandleChangeject')
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: '' });
    if (name === 'photo') {
      let pickedFile;

      if (e.target.files && e.target.files.length === 1) {
        pickedFile = e.target.files[0];
        setFile(pickedFile);
      } else {
      }
    }
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    //why have to {name} => because when pass to create method
    // receive like this: name:'react'
    // fit with extraction in backend
    // {name} === name : 'name'
   
    updateCategory(formData, token,router.query.slug).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          success: false,
        });
        toast.error(data.error);
      } else {
        setValues({
          ...values,
          error: false,
          success: `A new category named "${data.name}" is created`
        });
        toast.success(`A new category named "${data.name}" is successfully updated`);
      }
    });
  };

  const newCategoryForm = () => {
    return (
      <form onSubmit={clickSubmit}>
        <div className='form-group'>
          <label className='text-muted'>Name</label>
          <input
            value={name}
            type='text'
            className='form-control'
            onChange={handleChange('name')}
            placeholder='Name'
          />
        </div>
        <div className='form-group'>
          <textarea
            value={categoryDesc}
            type='text'
            className='form-control'
            onChange={handleChange('categoryDesc')}
            placeholder='categoryDesc'
          />
        </div>

        <div>
          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
        </div>
      </form>
    );
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const showError = () => {
    return (
      <div
        className='alert alert-danger'
        style={{ display: error ? '' : 'none' }}
      >
        {error}
      </div>
    );
  };

  const showSuccess = () => {
    return (
      <div
        className='alert alert-success'
        style={{ display: success ? '' : 'none' }}
      >
        {success}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className='container-fluid pb-5'>
        <div className='row'>
          <div className='col-md-8'>
            <h2>Create New Category</h2>
            {newCategoryForm()}
            <div className='pt-3'>
            
            </div>
          </div>
          <div className='col-md-4'>
            <div>
              <div className='form-group pb-2'>
                <h5>Featured Image</h5>
                <hr />
                <div>
                  <small className='text-muted'>Max size: 1mb</small>
                </div>
                <div className='image-upload__preview'>
                  {previewUrl && <img src={previewUrl} alt='preview' />}
                  {!previewUrl && <p>abc</p>}
                </div>
                <label className='btn btn-outline-info'>
                  Upload Featured Image
                  <input
                    type='file'
                    accept='image/*'
                    onChange={handleChange('photo')}
                    hidden
                    ref={filePickerRef}
                    onClick={pickImageHandler}
                  />
                </label>
              </div>
            </div>
            <div>
              <h5>Services</h5>
              <hr />
              <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                {showServices()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default withRouter(CategoryUpdateComponent);
