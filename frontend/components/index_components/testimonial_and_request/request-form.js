import React, { useState } from 'react';

const RequestForm = (props) => {
  const [imgArr, setImgArr] = useState([]);
  let fileObj = [],
    fileArr = [];

  const uploadMultipleFiles = (e) => {
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArr.push(URL.createObjectURL(fileObj[0][i]));
    }
    setImgArr(fileArr);
  };

  const cambiar_login = () => {
    document.querySelector('.cont_forms').className =
      'cont_forms cont_forms_active_login';
    document.querySelector('.cont_form_login').style.display = 'block';
    document.querySelector('.cont_form_sign_up').style.opacity = '0';

    setTimeout(function () {
      document.querySelector('.cont_form_login').style.opacity = '1';
    }, 400);

    setTimeout(function () {
      document.querySelector('.cont_form_sign_up').style.display = 'none';
    }, 200);
  };

  const cambiar_sign_up = (at) => {
    document.querySelector('.cont_forms').className =
      'cont_forms cont_forms_active_sign_up';
    document.querySelector('.cont_form_sign_up').style.display = 'block';
    document.querySelector('.cont_form_login').style.opacity = '0';

    setTimeout(function () {
      document.querySelector('.cont_form_sign_up').style.opacity = '1';
    }, 100);

    setTimeout(function () {
      document.querySelector('.cont_form_login').style.display = 'none';
    }, 400);
  };

  const ocultar_login_sign_up = () => {
    document.querySelector('.cont_forms').className = 'cont_forms';
    document.querySelector('.cont_form_sign_up').style.opacity = '0';
    document.querySelector('.cont_form_login').style.opacity = '0';

    setTimeout(function () {
      document.querySelector('.cont_form_sign_up').style.display = 'none';
      document.querySelector('.cont_form_login').style.display = 'none';
    }, 500);
  };

  const testOnClick = (e) => {
    e.stopPropagation();
    console.log('inside');
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(imgArr);
  };
  return (
    <React.Fragment>
      <div
        className='cotn_principal'
        onClick={(e) => props.toggleOpenRequestForm(e)}
      >
     
        <div className='cont_centrar'>
        <a
          href='#'
          className=' request-form__close-btn fa fa-times'
          onClick={(e) => props.toggleOpenRequestForm(e)}
        ></a>
          <div className='cont_login' onClick={(e) => testOnClick(e)}>
            <div className='cont_info_log_sign_up row mx-0'>
              <div className='col_md_login col-12 col-md-6'>
                <div className='cont_ba_opcitiy'>
                  <h2>Request Quote</h2>
                  <p>
                    Fill in form with your situation and we will contact as soon
                    as possible
                  </p>
                  <button className='btn_login' onClick={cambiar_login}>
                    REQUEST FORM
                  </button>
                </div>
              </div>
              <div className='col_md_sign_up col-12 col-md-6'>
                <div className='cont_ba_opcitiy'>
                  <h2>Contact Directly</h2>

                  <p>Contact us immediately</p>

                  <button className='btn_sign_up' onClick={cambiar_sign_up}>
                    Show me
                  </button>
                </div>
              </div>
            </div>

            <div className='cont_back_info'>
              <div className='cont_img_back_grey'>
                <img
                  src='https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d'
                  alt=''
                />
              </div>
            </div>
            <div className='cont_forms'>
              <div className='cont_img_back_'>
                <img
                  src='https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d'
                  alt=''
                />
              </div>
              <div className='cont_form_login'>
                <a href='#' onClick={ocultar_login_sign_up}>
                  <i className='fa fa-arrow-left' aria-hidden='true'></i>
                </a>
                <h2>REQUEST FORM</h2>
                <form onSubmit={onSubmitForm}>
                  <input type='text' placeholder='Name' />
                  <input type='text' placeholder='Email' />

                  <input
                    type='file'
                    className=''
                    onChange={uploadMultipleFiles}
                    multiple
                  />
                  <label for='files'>Capture your problems</label>
                  <div className='form-group multi-preview'>
                    {(imgArr || []).map((url) => (
                      <img src={url} alt='...' />
                    ))}
                  </div>
                  <textarea
                    className='request-form__message'
                    placeholder='Describe your problems'
                  ></textarea>
                  <input type='submit' className='btn_login' value='Submit' />
                </form>
              </div>

              <div className='cont_form_sign_up'>
                <a href='#' onClick={ocultar_login_sign_up}>
                  <i className='fa fa-arrow-left' aria-hidden='true'></i>
                </a>
                <h2>Get In Touch</h2>
              
                 
                  <div className='contact-detail row mx-0'>
                    <ul>
                      <li>
                        <i className='fa fa-map-marker'></i>
                        <div className='location_address fleft'>
                          <strong>Logis Cargo Ltd.</strong>
                          <br />
                          42B, Tailstoi Town 5248 MT, Wordwide Country
                        </div>
                      </li>
                      <li>
                        <i className='fa fa-phone'></i>
                        <div className='fleft contact_no'>
                          <a href='#'>+ 01865 524 8503</a> /{' '}
                          <a href='#'>1254 954 7854</a>
                        </div>
                      </li>
                      <li>
                        <i className='fa fa-envelope-o'></i>
                        <div className='fleft contact_mail'>
                          <a href='#'>contact@logiccargo.com</a>
                        </div>
                      </li>
                      <li>
                      <i class="fa fa-clock-o" aria-hidden="true"></i>

                        <div className='fleft service_time'>
                          Monday – Friday : 800 – 1900
                        </div>
                      </li>
                    </ul>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RequestForm;
