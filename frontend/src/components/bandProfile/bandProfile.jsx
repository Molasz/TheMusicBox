import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './bandProfile.scss';

import { getBand } from '../../redux/actions/bandActions';
import store from '../../redux/store';

import Photos from './photos/photos';
import Discography from './discography/discography';
import Concerts from './concerts/concerts';
import Bio from './bio/bio';

import Star from '@material-ui/icons/Grade';

function BandProfile(props) {
  useEffect(() => {
    store.dispatch(getBand(props.match.params.bandId));
  }, []);

  const result = props.band ? (
    <article className='band-profile'>
      <div className='band-profile__top'>
        <img src={props.band.logo} alt='Logo' className='top__logo' />

        <img
          src='https://pbs.twimg.com/profile_banners/851494228815482880/1539011178/1500x500'
          alt='Banner'
          className='top__banner'
        />
        <div className='top__info'>
          <strong className='info__name'>{props.band.name}</strong>
          <div className='info__follow'>
            <div className='follow__container'>
              <Star className='contanier__icon' />
              <button className='container__button'>Follow</button>
            </div>
            <p className='follow__count'> 14 Followers</p>
          </div>
        </div>
      </div>
      <div className='band-profile__middle'>
        <Bio
          bio={props.band.bio}
          city={props.band.city}
          country={props.band.country}
          name={props.band.name}
          socialNetwork={props.band.socialNetwork}
        />

        <Discography data={props.band.discography} />
      </div>
      <div className='band-profile__bottom'>
        <Concerts data={props.band.concerts} />
        <Photos data={props.band.photos} />
      </div>
    </article>
  ) : (
    <h3>Loading...</h3>
  );
  return result;
}

function mapStateToProps(state) {
  return state.bandReducer;
}

function mapDispatchToProps(dispatch) {
  return { getBand };
}

export default connect(mapStateToProps, mapDispatchToProps)(BandProfile);
