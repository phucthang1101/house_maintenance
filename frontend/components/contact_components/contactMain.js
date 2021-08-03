import React, { useState, useEffect } from 'react';
import './contactMain.css';
import { motion } from 'framer-motion';
import Fade from 'react-reveal';
import { emailContactForm } from '../../actions/formAction';
import { ToastContainer, toast } from 'react-toastify';

toast.configure();

const ContactMain = () => {
  const [imgArr, setImgArr] = useState([]);
  var fileObj = [],
    fileArr = [];
  const [initialImgArr, setInitialImgArr] = useState([]);

  const [values, setValues] = useState({
    message: '',
    name: '',
    email: '',
    phone: '',
    formData: '',
    sent: false,
    success: false,
    error: false,
  });

  const { message, name, email, phone, formData, sent, success, error } =
    values;

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const uploadMultipleFiles = (e) => {
    fileArr = [...imgArr];
    fileObj.push(e.target.files);
    //  console.log(fileObj);
    for (let i = 0; i < fileObj[0].length; i++) {
      let url = URL.createObjectURL(fileObj[0][i]),
        name = fileObj[0][i].name;
      fileArr.push({
        url,
        name,
      });
    }
    setImgArr(fileArr);
    setInitialImgArr(fileObj);
  };

  const deletePreviewImg = (e) => {
    let cloneImgArr = [...imgArr];
    for (let i = 0; i < cloneImgArr.length; i++) {
      if (cloneImgArr[i].name === e.target.id) {
        cloneImgArr.splice(i, 1);
      }
    }
    setImgArr(cloneImgArr);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    //  console.log(initialImgArr);
    for (let i = 0; i < initialImgArr[0].length; i++) {
      formData.append('photo', initialImgArr[0][i]);
    }

    setValues({ ...values, buttonText: 'Sending...' });
    emailContactForm(formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        toast.error(data.error);
      } else {
        setValues({
          ...values,
          sent: true,
          name: '',
          email: '',
          message: '',
          phone: '',
          buttonText: 'Sent',
          success: data.success,
        });
        if (data.success) {
          toast.success('Thank you for contacting me ^^');
        }
      }
    });
  };

  const handleChange = (name) => (e) => {
    if (name === 'photo') return;
    formData.set(name, e.target.value);

    setValues({
      ...values,
      [name]: e.target.value,
      formData,
      error: false,
      success: false,
    });
  };

  return (
    <React.Fragment>
      <div className='form-and-info row mx-0'>
        <Fade right>
          <div className='col-12 col-md-6 contact-form-wrapper px-0'>
            <form className='contact-form' onSubmit={onSubmitForm}>
              <h2>CONTACT US</h2>
              <p type='Name:'>
                <input
                  className='contact-form__input'
                  placeholder='Write your name here..'
                  onChange={handleChange('name')}
                  value={name}
                ></input>
              </p>
              <p type='Email:'>
                <input
                  className='contact-form__input'
                  placeholder='Let us know how to contact you back..'
                  onChange={handleChange('email')}
                  value={email}
                ></input>
              </p>
              <p type='Phone:'>
                <input
                  className='contact-form__input'
                  placeholder='Free estimate here..'
                  onChange={handleChange('phone')}
                  value={phone}
                ></input>
              </p>
              <p type='Message:'>
                <textarea
                  placeholder='What would you like to tell us..'
                  onChange={handleChange('message')}
                  value={message}
                ></textarea>
              </p>
              {/* <label className='custom-file-upload' htmlFor='file-upload'>
              <input
                type='file'
                className='contact-form__input-file'
                onChange={uploadMultipleFiles}
                multiple
                id='file-upload'
              />
              Custom Upload
            </label> */}
              {/* <label>Capture your problems</label> */}
              <Fade bottom>
                <div className='form-group file-area'>
                  <label htmlFor='images'>
                    Images <span>Show us your problems</span>
                  </label>
                  <input
                    type='file'
                    name='images'
                    id='images'
                    required='required'
                    onChange={uploadMultipleFiles}
                    multiple
                  />
                  <div className='file-dummy'>
                    <div className='success'>
                      Great, your files are selected. Keep on.
                    </div>
                    <div className='default'>Please select some files</div>
                  </div>
                </div>
              </Fade>
              <div className='form-group multi-preview'>
                {(imgArr || []).map((img) => (
                  <>
                    <div className='img-preview-wrap '>
                      <span
                        className='img-preview-close'
                        id={img.name}
                        onClick={deletePreviewImg}
                      >
                        &times;
                      </span>
                      <img
                        className='img-preview'
                        src={img.url}
                        alt={img.name}
                        title={img.name}
                      />
                      <div className='img-preview-caption'>{img.name}</div>
                    </div>
                  </>
                ))}
              </div>
              <button>Send Message</button>
            </form>
          </div>
        </Fade>
        <Fade left>
          <div className='col-12 col-md-6 contact-info'>
            <div className='contact-info-wrapper'>
              <h2>CONTACT INFO</h2>
              <div className='contact-info-inner'>
                <div className='contact-info-icon'>
                  {' '}
                  <span className='fa fa-map-marker'></span>
                </div>
                <div className='contact-info-header'>
                  <h3>Address</h3>
                  <p>1109 Wyandotte St West, Windsor ON N9A5Y1</p>
                </div>
              </div>
              <div className='contact-info-inner'>
                <div className='contact-info-icon'>
                  {' '}
                  <span className='fa fa-phone'></span>
                </div>
                <div className='contact-info-header'>
                  <h3>Phone</h3>
                  <p> + 226 506 4825</p>
                </div>
              </div>
              <div className='contact-info-inner'>
                <div className='contact-info-icon'>
                  {' '}
                  <span className='fa fa-envelope'></span>
                </div>
                <div className='contact-info-header'>
                  <h3>Email</h3>
                  <p>matttran1101@gmail.com</p>
                </div>
              </div>
              <div className='contact-info-inner'>
                <div className='contact-info-icon'>
                  {' '}
                  <span className='fa fa-clock-o'></span>
                </div>
                <div className='contact-info-header'>
                  <h3>We are open</h3>
                  <p>Monday – Friday : 9 AM – 5 PM</p>
                </div>
              </div>

              <div className='contact-info-inner'>
                <div className='contact-info-icon'>
                  {' '}
                  <span className='fa fa-map-marker'></span>
                </div>
                <div className='contact-info-header'>
                  <h3>Serving Area</h3>
                  <div className='serving-icon-area'>
                    <p className='serving-icon'>
                      <span className='fa fa-wrench'></span>Windsor
                    </p>
                    <p className='serving-icon'>
                      <span className='fa fa-wrench'></span>Essex
                    </p>
                    <p className='serving-icon'>
                      <span className='fa fa-wrench'></span>Tecumseh
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Fade up>
              {' '}
              <div className='contact-info-image'>
                <img src='/static/images/main_contact_02.jpg' alt='' />
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default ContactMain;
