import React from 'react';
import './bandProfile.scss';

import Discography from './discography/discography';
const logo =
  'https://partisano.cat/7705-superlarge_default/samarreta-crim-logo-groc.jpg';

function bandProfile() {
  return (
    <div className='band-profile__container'>
      <div className='container__top'>
        <img className='top__logo' src={logo} alt='Logo' />
        <div className='top__banner'>
          <button className='banner__button'></button>
          <p className='banner_text'>14 Followers</p>
        </div>
      </div>
      <div className='container__bottom'>
        <div className='bottom__bio'>BIO</div>
        <div className='bottom__photos'>PHOTOS</div>
        <div className='bottom__discography'>DISCOGRAPHY</div>
        <div className='bottom__concerts'>Concerts</div>
      </div>
    </div>
  );
}

export default bandProfile;
