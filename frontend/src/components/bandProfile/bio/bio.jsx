import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './bio.scss';

import { editBio, editName } from '../../../redux/actions/authActions';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Bio({ city, country, bio, name, socialNetwork, editInfo, dispatch }) {
  return (
    <section className='bio'>
      <div className='bio__top'>
        <p className='top__title'>
          {editInfo ? (
            <input
              className='title__name'
              value={editInfo.name}
              onChange={(event) => dispatch(editName(event.target.value))}
            />
          ) : (
            <strong className='title__name'>{name}</strong>
          )}

          {city && ' | '}
          <span className='title__city'>{city}</span>
          {'   '}
          <span className='title__country'>{country}</span>
        </p>
        {editInfo ? (
          <textarea
            className='top__text'
            value={editInfo.bio}
            onChange={(event) => dispatch(editBio(event.target.value))}
          />
        ) : (
          <p className='top__text'>{bio}</p>
        )}
      </div>
      {socialNetwork && (
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
      )}
    </section>
  );
}

function mapDispatchToProps(state) {
  return { editInfo: state.authReducer.editInfo };
}

export default connect(mapDispatchToProps)(Bio);
export { Bio };
