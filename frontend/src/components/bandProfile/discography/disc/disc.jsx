import React from 'react';
import './disc.scss';

function discography({ data }) {
  return (
    <div className='item'>
      <img src={data.img} alt='Cover' className='item__img' />
      <p className='item__title'>{data.title}</p>
    </div>
  );
}

export default discography;
