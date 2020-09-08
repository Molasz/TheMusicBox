import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './bandProfile.scss';

import { getBand, follow } from '../../redux/actions/bandActions';
import store from '../../redux/store';

import Photos from './photos/photos';
import Discography from './discography/discography';
import Concerts from './concerts/concerts';
import Bio from './bio/bio';

import Star from '@material-ui/icons/Grade';

let userIsFollowing = null;

function BandProfile({ band, match, user }) {
  const [isFollowing, setIsFollowing] = useState(false);

  function onFollow(event) {
    event.preventDefault();
    setIsFollowing(!isFollowing);
  }

  useEffect(() => {
    console.log('useEffect');
    if (!band) store.dispatch(getBand(match.params.bandId));
    if (user && band && !userIsFollowing) {
      userIsFollowing = user.following.some((element) => element === band._id);
      setIsFollowing(userIsFollowing);
    }
  });

  const followIconClass = isFollowing ? 'orange' : 'white';

  const result = band ? (
    <article className='band-profile'>
      <div className='band-profile__top'>
        <img src={band.logo} alt='Logo' className='top__logo' />

        <img src={band.banner} alt='Banner' className='top__banner' />
        <div className='top__info'>
          <strong className='info__name'>{band.name}</strong>
          <div className='info__follow'>
            <div className='follow__container'>
              <Star
                className={`contanier__icon ${followIconClass}`}
                id='follow'
                onClick={onFollow}
              />
              <p className='follow__count'> 14 Followers</p>
            </div>
          </div>
        </div>
      </div>
      <div className='band-profile__middle'>
        <Bio
          bio={band.bio}
          city={band.city}
          country={band.country}
          name={band.name}
          socialNetwork={band.socialNetwork}
        />

        <Discography data={band.discography} />
      </div>
      <div className='band-profile__bottom'>
        <Concerts data={band.concerts} />
        <Photos data={band.photos} />
      </div>
    </article>
  ) : (
    <h3>Loading...</h3>
  );

  return result;
}

function mapStateToProps(state) {
  return { band: state.bandReducer.band, user: state.authReducer.user };
}

export default connect(mapStateToProps, null)(BandProfile);
