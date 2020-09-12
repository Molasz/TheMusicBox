import React from 'react';
import { connect } from 'react-redux';

import {
  bandEditName,
  bandEditBio,
  bandEditCity,
  bandEditCountry,
  bandEditTwitter,
  bandEditFacebook,
  bandEditInstagram
} from '../../../../redux/actions/bandActions';

import './bandBio.scss';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function BandBio({
  city,
  country,
  bio,
  name,
  socialNetwork,
  editInfo,
  dispatch
}) {
  return (
    <section className='bio'>
      <div className='bio__top'>
        {Object.keys(editInfo).length === 0 &&
        editInfo.constructor === Object ? (
          <strong className='top__name'>{name}</strong>
        ) : (
          <input
            type='text'
            value={editInfo.name}
            onChange={(event) => dispatch(bandEditName(event.target.value))}
            className='top__input'
          />
        )}
        <div className='top__region'>
          {Object.keys(editInfo).length === 0 &&
          editInfo.constructor === Object ? (
            <>
              <p className='region__city'>{city}</p> |
              <p className='region__country'>{country}</p>
            </>
          ) : (
            <>
              <input
                type='text'
                value={editInfo.city}
                onChange={(event) => dispatch(bandEditCity(event.target.value))}
                className='region__city-input'
              />

              <input
                type='text'
                value={editInfo.country}
                onChange={(event) =>
                  dispatch(bandEditCountry(event.target.value))
                }
                className='region__country-input'
              />
            </>
          )}
        </div>
      </div>
      <div className='bio__middle'>
        {Object.keys(editInfo).length === 0 &&
        editInfo.constructor === Object ? (
          <p className='middle__bio'>{bio}</p>
        ) : (
          <textarea
            type='text'
            value={editInfo.bio}
            onChange={(event) => dispatch(bandEditBio(event.target.value))}
            className='middle__text-area'
          />
        )}
      </div>
      <div className='bio__bottom'>
        {Object.keys(editInfo).length === 0 &&
        editInfo.constructor === Object ? (
          <>
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
          </>
        ) : (
          <>
            <input
              type='text'
              value={editInfo.socialNetwork.twitter}
              onChange={(event) =>
                dispatch(bandEditTwitter(event.target.value))
              }
              className='bottom__input'
            />
            <input
              type='text'
              value={editInfo.socialNetwork.facebook}
              onChange={(event) =>
                dispatch(bandEditFacebook(event.target.value))
              }
              className='bottom__input'
            />
            <input
              type='text'
              value={editInfo.socialNetwork.instagram}
              onChange={(event) =>
                dispatch(bandEditInstagram(event.target.value))
              }
              className='bottom__input'
            />
          </>
        )}
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    editInfo: state.bandReducer.editInfo
  };
}

export default connect(mapStateToProps)(BandBio);
export { BandBio };
