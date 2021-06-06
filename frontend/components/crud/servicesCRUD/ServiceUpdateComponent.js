import React from 'react';
import { withRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getCookie, isAuth } from '../../../actions/authAction';
import {
  createService,
  listServices,
  removeService,
  updateService,
  readServices,
} from '../../../actions/serviceAction';
import { listSingleServices } from '../../../actions/singleServiceAction';
import { ToastContainer, toast } from 'react-toastify';

import { QuillModules, QuillFormats } from '../../../helper/quill';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
toast.configure();

const ServiceUpdateComponent = ({ router }) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const filePickerRef = useRef();

  const [values, setValues] = useState({
    name: '',
    error: '',
    success: '',
    formData: new FormData(),
    description: '',
    slogan: '',
    overviewTitle: '',
    svgIcon:'',
    showing: false,
  });
  const {
    name,
    error,
    success,
    formData,
    description,
    slogan,
    overviewTitle,
    svgIcon,
    showing,
  } = values;
  const token = getCookie('token');

  const [overviewDesc, setOverviewDesc] = useState('');

  const [singleServices, setSingleServices] = useState([]);
  const [checkedSingleServices, setCheckedSingleServices] = useState([]);

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initServices();
    initSingleServices();
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

  const initServices = () => {
    if (router.query.slug) {
      readServices(router.query.slug).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues({
            ...values,
            name: data.name,
            description: data.description,
            showing: data.showing,
            slogan: data.slogan,
            overviewTitle: data.overviewTitle,
            svgIcon: data.svgIcon
          });
          // console.log('service: ',data)
          setOverviewDesc(data.overviewDesc);
          setSingleServicesArray(data.singleServices);
          setPreviewUrl(data.photo);
          formData.set('showing', data.showing);
        }
      });
    }
  };

  const setSingleServicesArray = (singleServices) => {
    let singleServicesChecked = [];
    singleServices.map((singleService, index) => {
      singleServicesChecked.push(singleService);
    });
    setCheckedSingleServices(singleServicesChecked);
  };

  const initSingleServices = () => {
    listSingleServices().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        console.log(data.error);
      } else {
        setSingleServices(data);
      }
    });
  };

  const handleSingleServiceToggle = (singleServiceId) => () => {
    setValues({ ...values, error: '' });

    // find categoryId in checkList or return -1
    const clickedSingleServiceId = checkedSingleServices.indexOf(
      singleServiceId
    );
    const all = [...checkedSingleServices];
    if (clickedSingleServiceId === -1) {
      all.push(singleServiceId);
    } else {
      all.splice(clickedSingleServiceId, 1);
    }
    setCheckedSingleServices(all);
    formData.set('singleServices', all);
  };

  const findSingleServicesChecked = (categoryId) => {
    const result = checkedSingleServices.indexOf(categoryId);
    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const showSingleServices = () => {
    return (
      singleServices &&
      singleServices.map((singleService, index) => {
        return (
          <li className='list-unstyled' key={index}>
            <input
              onChange={handleSingleServiceToggle(singleService._id)}
              checked={findSingleServicesChecked(singleService._id)}
              type='checkbox'
              className='mr-2'
            />
            <label className='form-check-label'>{singleService.name}</label>
          </li>
        );
      })
    );
  };

  const handleChange = (name) => (e) => {
    const value =
      name === 'photo'
        ? e.target.files[0]
        : name === 'showing'
        ? e.target.checked
        : e.target.value;
    formData.set(name, value);

    // console.log('obhandleChangeject')

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

  const handleOverviewDesc = (event) => {
    setOverviewDesc(event);
    formData.set('overviewDesc', event);
    
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    
    for (var valueData of formData.values()) {
      console.log(valueData);
    }

    updateService(formData, token, router.query.slug).then((data) => {
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
          success: `A new service named "${data.name}" is created`,
        });
        toast.success(
          `A new service named "${data.name}" is successfully updated`
        );
      }
    });
  };

  const newServiceForm = () => {
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
          <label className='text-muted'>Slogan</label>
          <input
            value={slogan}
            type='text'
            className='form-control'
            onChange={handleChange('slogan')}
            placeholder='Slogan in HTML'
          />
        </div>
        <div className='form-group'>
        <label className='text-muted'>Description</label>
          <textarea
            value={description}
            type='text'
            className='form-control'
            onChange={handleChange('description')}
            placeholder='Description'
          />
        </div>
        <div className='form-group'>
        <label className='text-muted'>Svg Icon</label>
          <textarea
            value={svgIcon}
            type='text'
            className='form-control'
            onChange={handleChange('svgIcon')}
            placeholder='Svg Icon in HTML'
          />
        </div>
        <div className='form-group'>
          <label className='text-muted'>Overview Title</label>
          <input
            value={overviewTitle}
            type='text'
            className='form-control'
            onChange={handleChange('overviewTitle')}
            placeholder='Overview Title'
          />
        </div>
        <div className='form-group'>
          <ReactQuill
            value={overviewDesc || ''}
            onChange={handleOverviewDesc}
            placeholder='Overview Description with HTML...'
            modules={QuillModules}
            formats={QuillFormats}
          />
        </div>
        <div>
          <label className='text-muted'>Showing</label>
          <input
            name='showing'
            type='checkbox'
            checked={showing}
            onChange={handleChange('showing')}
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
            <h2>Update Service</h2>
            {newServiceForm()}
            <div className='pt-3'></div>
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
              <h5>Single Services</h5>
              <hr />
              <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                {showSingleServices()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default withRouter(ServiceUpdateComponent);
