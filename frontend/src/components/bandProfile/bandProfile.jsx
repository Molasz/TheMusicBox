import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './bandProfile.scss';

import { getBand } from '../../redux/actions/bandActions';
import store from '../../redux/store';

import Photos from './photos/photos';
import Discography from './discography/discography';
import Concerts from './concerts/concerts';

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
          <p className='info__name'>{props.band.name}</p>
          <div className='info__follow'>
            <button className='follow__button'>Follow</button>
            <p className='follow__number'> 14 Followers</p>
          </div>
        </div>
      </div>
      <div className='band-profile__middle'>
        <div className='middle__bio'>{props.band.bio}</div>

        <Discography data={props.band.discography} />
      </div>
      <div className='band-profile__bottom'>
        <div className='bottom__concerts'>
          <Concerts data={props.band.concerts} />
        </div>
        <div className='bottom__photos'>
          <Photos data={props.band.photos} />
        </div>
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
