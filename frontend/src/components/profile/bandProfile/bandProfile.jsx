import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './bandProfile.scss';

import PuffLoader from 'react-spinners/PuffLoader';

import { getBand, follow, showDisc } from '../../redux/actions/bandActions';

import ProfileHeader from '../profileHeader/profileHeader';
import Photos from './photos/photos';
import Discography from './discography/discography';
import Concerts from './concerts/concerts';
import Bio from './bio/bio';

function BandProfile({ match, band, followers, user, dispatch }) {
  const [calls, setCalls] = useState(false);
  const [checkFollowing, setCheckFollowing] = useState(false);
  const [isFollowing, setIsFollowing] = useState(null);

  useEffect(() => {
    if (!calls) {
      dispatch(showDisc());
      dispatch(getBand(match.params.bandId));
      dispatch(follow(match.params.bandId));
      setCalls(true);
    }
    if (
      !checkFollowing &&
      !(Object.keys(user).length === 0 && user.constructor === Object) &&
      !(Object.keys(band).length === 0 && band.constructor === Object)
    ) {
      setIsFollowing(
        user.following.some((element) => element._id === band._id)
      );
      setCheckFollowing(true);
    }
  }, [band, calls, dispatch, match.params.bandId, user, checkFollowing]);

  const result = !(
    Object.keys(band).length === 0 && band.constructor === Object
  ) ? (
    <article className='band-profile'>
      <div className='band-profile__top'>
        <ProfileHeader
          logo={band.logo}
          banner={band.banner}
          name={band.name}
          isBand={true}
          match={match}
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
    <PuffLoader color='#f55110' />
  );

  return result;
}

function mapStateToProps(state) {
  return {
    band: state.bandReducer.band,
    user: state.authReducer.user
  };
}

export default connect(mapStateToProps, null)(BandProfile);
export { BandProfile };
