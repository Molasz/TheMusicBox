import React from 'react';
import { connect } from 'react-redux';

import './bandBio.scss';

import { editBio, editName } from '../../../../redux/actions/authActions';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function BandBio({ city, country, bio, name, socialNetwork }) {
  return (
    <section className='bio'>
      <div className='bio__top'>
        <strong className='top__name'>{name}</strong>
        <div className='top__region'>
          <p className='region__city'>{city}</p>
          {' | '}
          <p className='region__country'>{country}</p>
        </div>
      </div>
      <div className='bio__middle'>
        <p className='middle__bio'>{bio}</p>
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

export default BandBio;
