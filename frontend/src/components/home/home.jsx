import React from 'react';
import './home.scss';

function home() {
  return (
    <div className='home'>
      <img
        src='https://live.staticflickr.com/8523/8675150036_8fd47b4425_b.jpg'
        alt='home background'
        className='home__img'
      />
      <h1 className='home__title'>Welcome</h1>
    </div>
  );
}

export default home;
