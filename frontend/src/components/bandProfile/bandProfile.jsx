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

function BandProfile({ match, band, followers, user, dispatch }) {
  const [calls, setCalls] = useState(false);
  const [checkFollowing, setCheckFollowing] = useState(false);
  const [isFollowing, setIsFollowing] = useState(null);

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
      dispatch(showDisc());
      dispatch(getBand(match.params.bandId));
      dispatch(follow(match.params.bandId));
      setCalls(true);
    }
    if (!checkFollowing && user && band) {
      setIsFollowing(
        user.following.some((element) => element._id === band._id)
      );
      setCheckFollowing(true);
    }
  }, [band, calls, dispatch, match.params.bandId, user]);

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
