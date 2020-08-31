import React from 'react';
import './bandProfile.scss';

const logo =
  'https://partisano.cat/7705-superlarge_default/samarreta-crim-logo-groc.jpg';

function bandProfile() {
  return (
    <>
      <header className='bandProfile__header'>
        <img src={logo} alt='Band logo' className='header__logo' />
        <section className='header__banner'>
          <button className='banner__button'> Follow </button>
          <p className='banner__text'> 14 followers</p>
        </section>
      </header>
    </>
  );
}

export default bandProfile;
