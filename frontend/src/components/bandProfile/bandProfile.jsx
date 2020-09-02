import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './bandProfile.scss';

import { getBand } from '../../redux/actions/bandActions';

import Photos from './photos/photos';
import Discography from './discography/discography';
import Concerts from './concerts/concerts';

const logo =
  'https://partisano.cat/7705-superlarge_default/samarreta-crim-logo-groc.jpg';

const bio =
  'Banda de punk-rock de Tarragona formada durant el 2011, inspirats per la cruesa i melodies de bandes com Social Distortion, Leatherface, Cock Sparrer, Vanilla Muffins... Actualment presentant el seu segon llarga durada "Blau Sang, Vermell Cel" sota el segells BCore i Tesla Music.';

function BandProfile(props) {
  useEffect(() => {
    getBand(props.match.params.bandId);
  });

  return (
    <article className='band-profile'>
      <div className='band-profile__top'>
        <img src={logo} alt='Logo' className='top__logo' />

        <img
          src='https://pbs.twimg.com/profile_banners/851494228815482880/1539011178/1500x500'
          alt='Banner'
          className='top__banner'
        />
        <div className='top__info'>
          <p className='info__name'>CRIM</p>
          <div className='info__follow'>
            <button className='follow__button'>Follow</button>
            <p className='follow__number'> 14 Followers</p>
          </div>
        </div>
      </div>
      <div className='band-profile__middle'>
        <div className='middle__bio'>{bio}</div>

        <Discography className='middle__discography' />
      </div>
      <div className='band-profile__bottom'>
        <div className='bottom__concerts'>
          <Concerts />
        </div>
        <div className='bottom__photos'>
          <Photos />
        </div>
      </div>
    </article>
  );
}

function mapStateToProps(state) {
  const { band } = state;
  return { band };
}

function mapDispatchToProps(dispatch) {
  return { getBand };
}
export default connect(mapStateToProps, mapDispatchToProps)(BandProfile);
