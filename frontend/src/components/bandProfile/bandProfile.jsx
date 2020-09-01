import React from 'react';
import './bandProfile.scss';

import Photos from './photos/photos';
import Discography from './discography/discography';
import Concerts from './concerts/concerts';

const logo =
  'https://partisano.cat/7705-superlarge_default/samarreta-crim-logo-groc.jpg';

function bandProfile() {
  return (
    <div className='band-profile__container'>
      <div className='container__top'>
        <div className='top__banner'>
          <button className='banner__button'> Follow </button>
          <p className='banner__text'>14 Followers</p>
        </div>
        <div className='top__logo'>
          <img className='logo__img' src={logo} alt='Logo' />
          <h3 className='logo__name'>CRIM</h3>
        </div>
      </div>
      <div className='container__bottom'>
        <div className='bottom__bio'>
          <p className='bio__city'> CRIM Tarragona, Spain</p>
          <p className='bio__info'>
            Banda de punk-rock de Tarragona formada durant el 2011, inspirats
            per la cruesa i melodies de bandes com Social Distortion,
            Leatherface, Cock Sparrer, Vanilla Muffins... Actualment presentant
            el seu segon llarga durada "Blau Sang, Vermell Cel" sota el segells
            BCore i Tesla Music.
          </p>
        </div>
        <div className='bottom__photos'>
          <Photos />
        </div>
        <div className='bottom__discography'>
          <Discography />
        </div>
        <div className='bottom__concerts'>
          <Concerts />
        </div>
      </div>
    </div>
  );
}

export default bandProfile;
