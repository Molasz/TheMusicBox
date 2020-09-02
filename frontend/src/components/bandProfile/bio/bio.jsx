import React from 'react';
import './bio.scss';

function bio({ city, country, bio, name }) {
  return (
    <div className='bio'>
      <p className='bio__title'>
        <strong className='title__name'>
          {name}
          {' | '}
        </strong>
        <span className='title__text'>
          {city} {country}
        </span>
      </p>
      <p className='bio__text'>{bio}</p>
    </div>
  );
}

export default bio;
