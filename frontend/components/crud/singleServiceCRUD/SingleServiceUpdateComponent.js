import React from 'react';
import { withRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { getCookie, isAuth } from '../../../actions/authAction';
import {
  createSingleService,
  listSingleServices,
  removeSingleService,
  updateSingleService,
  readSingleServices
} from '../../../actions/singleServiceAction';
import { ToastContainer, toast } from 'react-toastify';
import dynamic from 'next/dynamic';


import { QuillModules, QuillFormats } from '../../../helper/quill';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
toast.configure();

const SingleServiceUpdateComponent = ({ router }) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const filePickerRef = useRef();

  const [values, setValues] = useState({
    name: '',
    error: '',
    success: '',
    formData: new FormData(),
    description: '',
    showing: false,
  });
  const { name, error, success, formData, description, showing } = values;
  const token = getCookie('token');
  const [body, setBody] = useState('');

 
  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
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

  useEffect(() => {
    dynamicallyImportPackage();
  }, []);

  let dynamicallyImportPackage = async () => {
    const { Quill } = await import('react-quill');

    let BlockEmbed = Quill.import('blots/block/embed');

    class DividerBlot extends BlockEmbed {}
    DividerBlot.blotName = 'hr';
    DividerBlot.tagName = 'hr';
    Quill.register(DividerBlot);

  };

  const initSingleServices = () => {
    if (router.query.slug) {
      readSingleServices(router.query.slug).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues({
            ...values,
            name: data.name,
            description: data.description,
            showing: data.showing
          });
          // console.log('service: ',data)
          setBody(data.body);
          setPreviewUrl(data.photo);
          formData.set('showing', data.showing);
        }
      });
    }
  };
  const handleBody = (event) => {
    setBody(event);
    formData.set('body', event);
    
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

  const clickSubmit = (e) => {
    e.preventDefault();
    
    for (var valueData of formData.values()) {
      console.log(valueData);
   }

    updateSingleService(formData, token, router.query.slug).then((data) => {
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
          success: `A new single service named "${data.name}" is created`,
        });
        toast.success(
          `A new single service named "${data.name}" is successfully updated`
        );
      }
    });
  };

  const newSingleServiceForm = () => {
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
            value={description}
            type='text'
            className='form-control'
            onChange={handleChange('description')}
            placeholder='Description'
          />
        </div>
        <div className='form-group'>
          <ReactQuill
            value={body}
            onChange={handleBody}
            placeholder='Write something amazing...'
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
            <h2>Update Single Service</h2>
            {newSingleServiceForm()}
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
           
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default withRouter(SingleServiceUpdateComponent);
