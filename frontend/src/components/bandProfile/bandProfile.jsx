import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './bandProfile.scss';

import { getBand, follow, showDisc } from '../../redux/actions/bandActions';
import { addFollow, removeFollow } from '../../redux/actions/authActions';

import ProfileHeader from '../profileHeader/profileHeader';
import Photos from './photos/photos';
import Discography from './discography/discography';
import Concerts from './concerts/concerts';
import Bio from './bio/bio';

let userIsFollowing = null;
let calls = false;

function BandProfile({ match, band, followers, user, dispatch }) {
  const [isFollowing, setIsFollowing] = useState(false);

  function onFollow(event) {
    event.preventDefault();
    if (user) {
      if (!isFollowing) dispatch(addFollow(user._id, band._id));
      else dispatch(removeFollow(user._id, band._id));
      setIsFollowing(!isFollowing);
    } else alert('Login to use this feature');
  }

  useEffect(() => {
    if (!calls) {
      dispatch(getBand(match.params.bandId));
      dispatch(follow(match.params.bandId));
      calls = true;
    }
    if (user && band && !userIsFollowing) {
      userIsFollowing = user.following.some((element) => element === band._id);
      setIsFollowing(userIsFollowing);
    }
  });

  const followIconClass = isFollowing ? 'orange' : 'white';

  const result = band ? (
    <article className='band-profile'>
      <div className='band-profile__top'>
        <ProfileHeader
          logo={band.logo}
          banner={band.banner}
          name={band.name}
          onFollow={onFollow}
          followers={followers}
          followIconClass={followIconClass}
        />
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
  return {
    band: state.bandReducer.band,
    followers: state.bandReducer.bandFollowers,
    user: state.authReducer.user
  };
}

export default connect(mapStateToProps, null)(BandProfile);
export { BandProfile };
