import React, { useState, useEffect } from 'react';
import {emailContactForm} from '../../../actions/formAction';
import { ToastContainer, toast } from 'react-toastify';

toast.configure();
const RequestForm = (props) => {
  const [imgArr, setImgArr] = useState([]);
  let fileObj = [],
    fileArr = [];
  const [initialImgArr, setInitialImgArr]= useState([]);

   const [values, setValues] = useState({
    message: '',
    name: '',
    email: '',
    phone:'',
    formData: '',
    sent: false,
    success: false,
    error: false,
  });

  const { message, name, email, phone,formData, sent, success, error } = values;

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

    // console.log(fileArr)
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
  //  console.log('inside');
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
  //  console.log(initialImgArr);
    for (let i = 0; i < initialImgArr[0].length; i++){
      formData.append('photo', initialImgArr[0][i])
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
          phone:'',
          buttonText: 'Sent',
          success: data.success,
        });
        if(data.success){
          toast.success('Thank you for contacting me ^^');
        }
      }
    });
  };

  const handleChange = (name) => (e) => {
    if(name==='photo')return;
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
                <span onClick={ocultar_login_sign_up}>
                  <i className='fa fa-arrow-left' aria-hidden='true'></i>
                </span>
                <h2>REQUEST FORM</h2>
                <form onSubmit={onSubmitForm}>
                  <div className='row mx-0'>
                    <div className='form-group col-4 form-group-basic'>
                      <label>Name</label>
                      <input
                        type='text'
                        placeholder='Name'
                        class='form-control'
                        onChange={handleChange('name')}
                        value={name}
                      />
                    </div>
                    <div className='form-group col-4 form-group-basic'>
                      <label>Email</label>
                      <input
                        type='text'
                        placeholder='Email'
                        class='form-control'
                        onChange={handleChange('email')}
                        value={email}
                      />
                    </div>
                    <div className='form-group col-4 form-group-basic'>
                      <label>Phone</label>
                      <input
                        type='text'
                        placeholder='Phone'
                        class='form-control'
                        onChange={handleChange('phone')}
                        value={phone}
                      />
                    </div>
                    <div className='row mx-0 w-100'>
                      <div className='col-12'>
                        <label className='col-4 my-4' htmlFor='files'>
                          Capture your problems
                        </label>
                        <input
                          type='file'
                          className='col-8 my-4 request__form-input__form fa fa-plus'
                          onChange={uploadMultipleFiles}
                          multiple
                        />
                        <div
                          className='form-group multi-preview col-12 pb-2'
                          id='style-1'
                        >
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
                                <div className='img-preview-caption'>
                                  {img.name}
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className='row mx-0 w-100 mt-3'>
                      <div className='col-8 mx-auto'>
                        <textarea
                          className='request-form__message'
                          placeholder='Describe your problems'
                          onChange={handleChange('message')}
                          value={message}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <input type='submit' className='btn_login' value='Submit' />
                  </div>
                </form>
              </div>

              <div className='cont_form_sign_up'>
                <span onClick={ocultar_login_sign_up}>
                  <i className='fa fa-arrow-left' aria-hidden='true'></i>
                </span>
                <h2>Get In Touch</h2>

                <div className='contact-detail row mx-0'>
                <ul>
                        <li>
                          <i className='fa fa-map-marker'></i>
                          <div className='location_address fleft'>
                            <strong>D.C Finisher</strong>
                            <br />
                            1109 Wyandotte St West, Windsor
                          </div>
                        </li>
                        <li>
                          <i className='fa fa-phone'></i>
                          <div className='fleft contact_no'>
                           + 226 506 4825
                          </div>
                        </li>
                        <li>
                          <i className='fa fa-envelope' aria-hidden='true'></i>
                          <div className='fleft contact_mail'>
                          matttran1101@gmail.com
                          </div>
                        </li>
                        <li>
                          <i className='fa fa-clock-o' aria-hidden='true'></i>
                          <div className='fleft service_time'>
                            Monday – Friday : 9:00 - 5:00
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
