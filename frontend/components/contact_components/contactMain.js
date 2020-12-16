import React, { useState } from 'react';
import './contactMain.css';
import { motion } from 'framer-motion';
import Fade from 'react-reveal';

const ContactMain = () => {
  const [imgArr, setImgArr] = useState([]);
  var fileObj = [],
    fileArr = [];

  const uploadMultipleFiles = (e) => {
    fileObj.push(e.target.files);
    //  fileArr = [...setImgArr];
    for (let i = 0; i < fileObj[0].length; i++) {
      console.log('before: ', fileArr);
      setImgArr((oldArray) => [
        ...oldArray,
        URL.createObjectURL(fileObj[0][i]),
      ]);
      //  fileArr.push(URL.createObjectURL(fileObj[0][i]));
      console.log('after: ', fileArr);
    }

    // setImgArr(fileArr);
  };

  return (
    <React.Fragment>
      <div className='form-and-info row mx-0'>
        <Fade right>
          <div className='col-12 col-md-6 contact-form-wrapper px-0'>
            <form className='contact-form'>
              <h2>CONTACT US</h2>
              <p type='Name:'>
                <input
                  className='contact-form__input'
                  placeholder='Write your name here..'
                ></input>
              </p>
              <p type='Email:'>
                <input
                  className='contact-form__input'
                  placeholder='Let us know how to contact you back..'
                ></input>
              </p>
              <p type='Phone:'>
                <input
                  className='contact-form__input'
                  placeholder='Free estimate here..'
                ></input>
              </p>
              <p type='Message:'>
                <textarea placeholder='What would you like to tell us..'></textarea>
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
                {(imgArr || []).map((url) => (
                  <img src={url} alt='...' />
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
                  <p>64 Prince Andrew Place Toronto ON M3C 2H4</p>
                </div>
              </div>
              <div className='contact-info-inner'>
                <div className='contact-info-icon'>
                  {' '}
                  <span className='fa fa-phone'></span>
                </div>
                <div className='contact-info-header'>
                  <h3>Phone</h3>
                  <p>519 - 999 - 5215</p>
                </div>
              </div>
              <div className='contact-info-inner'>
                <div className='contact-info-icon'>
                  {' '}
                  <span className='fa fa-map-marker'></span>
                </div>
                <div className='contact-info-header'>
                  <h3>Email</h3>
                  <p>phucthangvt1101@gmail.com</p>
                </div>
              </div>
              <div className='contact-info-inner'>
                <div className='contact-info-icon'>
                  {' '}
                  <span className='fa fa-clock-o'></span>
                </div>
                <div className='contact-info-header'>
                  <h3>We are open</h3>
                  <p>Monday – Friday 10AM – 8 PM</p>
                </div>
              </div>

              <div className='contact-info-inner'>
                <div className='contact-info-icon'>
                  {' '}
                  <span className='fa fa-map-o'></span>
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
