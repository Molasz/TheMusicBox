import React, { useState } from 'react';
import { connect } from 'react-redux';

import './bandHeader.scss';

import onFollow from './onFollow';

import Star from '@material-ui/icons/Grade';

function BandHeader({ logo, banner, name, followers, match, dispatch }) {
  const [followIconClass, setFollowIconClass] = useState('');

  const infoFollow = (
    <div className='follow__container'>
      <Star
        className={`contanier__icon ${followIconClass}`}
        id='follow'
        onClick={(event) => onFollow(event, 0, match.params.bandId, dispatch)}
      />
      <p className='follow__count'> {followers} Followers</p>
    </div>
  );

  return (
    <>
      <img src={logo} alt='Logo' className='top__logo' />
      <img src={banner} alt='Banner' className='top__banner' />
      <div className='top__info'>
        <strong className='info__name'>{name}</strong>
        <div className='info__follow'>{infoFollow}</div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { followers: state.bandReducer.bandFollowers };
}

export default connect(mapStateToProps)(BandHeader);
export { BandHeader };
