import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import './bandHeader.scss';

import { bandEdit } from '../../../../redux/actions/bandActions';

import onFollow from './onFollow';
import onSave from './onSave';

import Star from '@material-ui/icons/Grade';
import Gear from '@material-ui/icons/Settings';
import Save from '@material-ui/icons/Save';
import PublicIcon from '@material-ui/icons/Public';

function BandHeader({ band, editInfo, user, followers, dispatch }) {
  const [isFollowing, setIsFollowing] = useState(null);
  const publicAlert = () =>
    toast.error(
      'You need to fill name, biography, city and country before public the band',
      {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
    );

  useEffect(() => {
    if (isFollowing === null && user.following !== undefined) {
      setIsFollowing(
        user.following.some((element) => element._id === band._id)
      );
    }
    if (
      !(
        Object.keys(editInfo).length === 0 && editInfo.constructor === Object
      ) &&
      editInfo.public &&
      !(editInfo.name && editInfo.bio && editInfo.city && editInfo.country)
    ) {
      debugger;
      dispatch(bandEdit({ ...editInfo, public: false }));
    }
  }, [band._id, isFollowing, user, dispatch, editInfo]);

  return (
    <section className='band-header'>
      <img src={band.logo} alt='Logo' className='band-header__logo' />
      <img src={band.banner} alt='Banner' className='band-header__banner' />
      <div className='band-header__info'>
        <strong className='info__name'>
          {editInfo.name === undefined ? band.name : editInfo.name}
        </strong>

        <div className='info__follow'>
          <Star
            className={`contanier__icon ${isFollowing ? 'orange' : 'white'}`}
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
          <div className='info__edit'>
            <Gear
              className={`edit__gear ${editInfo.name ? 'orange' : 'white'}`}
              onClick={(event) =>
                dispatch(
                  bandEdit(
                    editInfo.name !== undefined
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
            {editInfo.name !== undefined && (
              <>
                <Save
                  className='edit__save'
                  onClick={(event) => onSave(event, band._id, editInfo)}
                />
                <PublicIcon
                  className={`edit__public ${
                    editInfo.public ? 'orange' : 'white'
                  }`}
                  onClick={() => {
                    if (
                      editInfo.name &&
                      editInfo.city &&
                      editInfo.country &&
                      editInfo.bio
                    )
                      dispatch(bandEdit(!editInfo.public));
                    else publicAlert();
                  }}
                />
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    followers: state.bandReducer.bandFollowers,
    user: state.authReducer.user,
    editInfo: state.bandReducer.editInfo,
    band: state.bandReducer.band
  };
}

export default connect(mapStateToProps)(BandHeader);
export { BandHeader };
