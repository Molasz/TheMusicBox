import React from 'react';
import './bandProfile.scss';

import Discography from './discography/discography';
const logo =
  'https://partisano.cat/7705-superlarge_default/samarreta-crim-logo-groc.jpg';

function bandProfile() {
  return (
    <section className='bandProfile__container'>
      <div className='container__logo'>
        <img src={logo} alt='Band logo' className='logo__img' />
      </div>
      <div className='container__banner'>
        <button className='banner__button'> Follow </button>
        <h3 className='banner__text'> 14 followers</h3>
      </div>
      <div className='container__concerts'>
        <h1>Concerts</h1>
      </div>
      <div className='container__discography'>
        <Discography />
      </div>
      <div className='container__photos'>
        <h1>Photos</h1>
      </div>
      <div className='container__bio'>
        <h1>Bio</h1>
      </div>
      <div className='container__social-media'>
        <h1>Socail Media</h1>
      </div>
    </section>
  );
}

export default bandProfile;
