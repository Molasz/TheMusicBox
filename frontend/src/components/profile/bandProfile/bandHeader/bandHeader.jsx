import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './bandHeader.scss';

import {
  bandEdit,
  bandEditPublic
} from '../../../../redux/actions/bandActions';

import onFollow from './onFollow';
import onSave from './onSave';

import Star from '@material-ui/icons/Grade';
import Gear from '@material-ui/icons/Settings';
import Save from '@material-ui/icons/Save';
import PublicIcon from '@material-ui/icons/Public';

function BandHeader({ band, editInfo, user, followers, dispatch }) {
  const [isFollowing, setIsFollowing] = useState(null);

  useEffect(() => {
    if (
      isFollowing === null &&
      !(Object.keys(user).length === 0 && user.constructor === Object)
    ) {
      setIsFollowing(
        user.following.some((element) => element._id === band._id)
      );
    }
  }, [band._id, isFollowing, user]);

  const followIconClass = isFollowing ? 'orange' : 'white';

  return (
    <section className='band-header'>
      <img src={band.logo} alt='Logo' className='band-header__logo' />
      <div className='band-header__banner'>
        <img src={band.banner} alt='Banner' className='banner__img' />
      </div>
      <div className='band-header__info'>
        <strong className='info__name'>
          {Object.keys(editInfo).length === 0 && editInfo.constructor === Object
            ? band.name
            : editInfo.name}
        </strong>

        <div className='info__bottom'>
          <div className='bottom__follow'>
            <Star
              className={`contanier__icon ${followIconClass}`}
              id='follow'
              onClick={(event) =>
                onFollow(
                  event,
                  user,
                  band._id,
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
          {band._id === user?.band?._id && (
            <div className='bottom__edit'>
              <Gear
                className={`edit__gear ${editInfo.name ? 'orange' : 'white'}`}
                onClick={(event) =>
                  dispatch(
                    bandEdit(
                      editInfo.name
                        ? {}
                        : {
                            public: band.public,
                            name: band.name,
                            bio: band.bio,
                            city: band.city,
                            country: band.country,
                            socialNetwork: {
                              twitter: band.socialNetwork.twitter,
                              facebook: band.socialNetwork.facebook,
                              instagram: band.socialNetwork.instagram
                            }
                          }
                    )
                  )
                }
              />
              {!(
                Object.keys(editInfo).length === 0 &&
                editInfo.constructor === Object
              ) && (
                <>
                  <Save
                    className='edit__save'
                    onClick={(event) => onSave(event, band._id, editInfo)}
                  />
                  <PublicIcon
                    className={`edit__public ${
                      editInfo.public ? 'orange' : 'white'
                    }`}
                    onClick={() => dispatch(bandEditPublic(!editInfo.public))}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    followers: state.bandReducer.bandFollowers,
    user: state.authReducer.user,
    editInfo: state.bandReducer.editInfo
  };
}

export default connect(mapStateToProps)(BandHeader);
export { BandHeader };
