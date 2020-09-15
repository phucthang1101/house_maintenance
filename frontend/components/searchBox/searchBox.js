import React from 'react';
import './searchBox.css';

const searchBox = (props) => {
  return (
    <div className='sidebar-content'>
      <div className='search_box_inner'>
        <a
          href='#'
          className='close-button search-close-btn fa fa-times'
          onClick={(e) => props.toggleOpenSearch(e)}
        ></a>
        <h3>Search</h3>
        <form
          action='http://shtheme.net/demosd/handylexo5/'
          method='get'
          className='search-form'
        >
          <input
            type='text'
            name='s'
            value=''
            className='form-control'
            placeholder='Search for...'
          />
          <button type='submit'>
            <i className='stroke-gap-icon icon-Search'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default searchBox;
