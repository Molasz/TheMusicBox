import React from 'react';
import './bio.scss';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function bio({ city, country, bio, name, socialNetwork }) {
  return (
    <section className='bio'>
      <div className='bio__top'>
        <p className='top__title'>
          <strong className='title__name'>
            {name}
            {' | '}
          </strong>
          <span className='title__city'>{city}</span>
          {'   '}
          <span className='title__country'>{country}</span>
        </p>
        <p className='top__text'>{bio}</p>
      </div>
      <div className='bio__bottom'>
        <a
          href={socialNetwork.twitter}
          target='_blank'
          rel='noopener noreferrer'
        >
          <TwitterIcon className='bottom-icon' />
        </a>
        <a
          href={socialNetwork.facebook}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FacebookIcon className='bottom-icon' />
        </a>
        <a
          href={socialNetwork.instagram}
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramIcon className='bottom-icon' />
        </a>
      </div>
    </section>
  );
}

export default bio;
