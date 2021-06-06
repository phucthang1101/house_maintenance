import React from 'react';
import { withRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { getCookie, isAuth } from '../../../actions/authAction';
import {
  createSingleService,
  listSingleServices,
  removeSingleService,
} from '../../../actions/singleServiceAction';
import dynamic from 'next/dynamic';


import { QuillModules, QuillFormats } from '../../../helper/quill';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const SingleServiceCreateComponent = ({ router }) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const filePickerRef = useRef();

  const singleServiceFormLocalStorage = () => {
    if (typeof window === 'undefined') {
      return false;
    }

    if (localStorage.getItem('singleService')) {
      return JSON.parse(localStorage.getItem('singleService'));
    } else return false;
  };

  const [values, setValues] = useState({
    name: '',
    error: '',
    success: '',
    formData: '',
    description: '',
    showing: false,
  });
  const { name, error, success, formData, description, showing } = values;
  const token = getCookie('token');
  const [body, setBody] = useState(singleServiceFormLocalStorage());


  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
   
  }, [router]);



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

  

  

  const handleChange = (name) => (e) => {
    const value =
      name === 'photo'
        ? e.target.files[0]
        : name === 'showing'
        ? e.target.checked
        : e.target.value;
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

  const handleBody = (event) => {
    // console.log(event);
    setBody(event);
    formData.set('body', event);
    if (typeof window !== 'undefined') {
      localStorage.setItem('singleService', JSON.stringify(event));
    }
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    
    createSingleService(formData, token).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          success: false,
        });
      } else {
        setValues({
          ...values,
          error: false,
          success: `A new single service named "${data.name}" is created`,
          name: '',
          description: '',
        });
       
        setBody('');
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
            <h2>Create New Service</h2>
            {newSingleServiceForm()}
            <div className='pt-3'>
              {showError()}
              {showSuccess()}
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
                  {previewUrl && <img src={previewUrl} alt='preview' style={{ width: '100%' }} />}
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
export default withRouter(SingleServiceCreateComponent);
