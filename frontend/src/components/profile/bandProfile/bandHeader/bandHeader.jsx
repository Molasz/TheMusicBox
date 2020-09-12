import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './bandHeader.scss';

import onFollow from './onFollow';

import Star from '@material-ui/icons/Grade';
import Gear from '@material-ui/icons/Settings';
import Save from '@material-ui/icons/Save';

function BandHeader({ logo, banner, name, bandId, user, dispatch, followers }) {
  const [isFollowing, setIsFollowing] = useState(null);

  useEffect(() => {
    if (
      isFollowing === null &&
      !(Object.keys(user).length === 0 && user.constructor === Object)
    ) {
      setIsFollowing(user.following.some((element) => element._id === bandId));
    }
  }, [bandId, isFollowing, user]);

  const followIconClass = isFollowing ? 'orange' : 'white';

  return (
    <section className='band-header'>
      <img src={logo} alt='Logo' className='band-header__logo' />
      <div className='band-header__banner'>
        <img src={banner} alt='Banner' className='banner__img' />
      </div>
      <div className='band-header__info'>
        <strong className='info__name'>{name}</strong>
        <div className='info__bottom'>
          <div className='bottom__follow'>
            <Star
              className={`contanier__icon ${followIconClass}`}
              id='follow'
              onClick={(event) =>
                onFollow(
                  event,
                  user,
                  bandId,
                  isFollowing,
                  setIsFollowing,
                  dispatch
                )
              }
            />
            <p className='follow__count'>
              <span className='count__number'>{followers}</span> Followers
            </p>
          </div>
          <div className='bottom__edit'>
            <Gear className='edit__gear' onClick={(event) => {}} />
            {true && <Save className='edit__save' onClick={(event) => {}} />}
          </div>
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    followers: state.bandReducer.bandFollowers,
    user: state.authReducer.user
  };
}

export default connect(mapStateToProps)(BandHeader);
export { BandHeader };
