import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import './bandHeader.scss';

import {
  bandEdit,
  sendBandEditInfo
} from '../../../../redux/actions/bandActions';
import { clearImage, uploadImage } from '../../../../redux/actions/infoActions';

import onFollow from './onFollow';

import Star from '@material-ui/icons/Grade';
import Gear from '@material-ui/icons/Settings';
import Save from '@material-ui/icons/Save';
import PublicIcon from '@material-ui/icons/Public';

function BandHeader({ band, editInfo, user, followers, image, dispatch }) {
  const [isFollowing, setIsFollowing] = useState(null);

  const [logo, setLogo] = useState();
  const [banner, setBanner] = useState();

  const [logoInput, setLogoInput] = useState(null);
  const [bannerInput, setBannerInput] = useState(null);

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
  }, [band._id, isFollowing, user, dispatch, editInfo]);

  useEffect(() => {
    if (image.identifier === 'logo') {
      setLogo(image.path);
    } else if (image.identifier === 'banner') {
      setBanner(image.path);
    }
  }, [image]);

  useEffect(() => {
    if (
      (logo === null || typeof logo === 'string') &&
      (banner === null || typeof banner === 'string')
    ) {
      const data = { ...editInfo };
      if (logo) data.logo = logo;
      if (banner) data.banner = banner;
      dispatch(sendBandEditInfo(band._id, data));
      dispatch(bandEdit({}));
      dispatch(clearImage());
    }
  }, [logo, banner]);

  return (
    <section className='band-header'>
      <img
        src={band.logo}
        alt='Logo'
        className='band-header__logo'
        onClick={() => {
          if (editInfo.name) logoInput.click();
        }}
      />
      <input
        type='file'
        name='file'
        style={{ display: 'none' }}
        ref={(fileInput) => setLogoInput(fileInput)}
        onChange={(event) => setLogo(event.target.files[0])}
      />
      <img
        src={band.banner}
        alt='Banner'
        className='band-header__banner'
        onClick={() => {
          if (editInfo.name) bannerInput.click();
        }}
      />
      <input
        type='file'
        name='file'
        style={{ display: 'none' }}
        ref={(fileInput) => setBannerInput(fileInput)}
        onChange={(event) => setBanner(event.target.files[0])}
      />
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
                          socialNetwork: { ...band.socialNetwork }
                        }
                  )
                )
              }
            />
            {editInfo.name !== undefined && (
              <>
                <Save
                  className='edit__save'
                  onClick={(event) => {
                    if (logo) {
                      const img = new FormData();
                      img.append('file', logo);
                      dispatch(uploadImage(band._id, img, 'logo'));
                    } else setLogo(null);

                    if (banner) {
                      const img = new FormData();
                      img.append('file', banner);
                      dispatch(uploadImage(band._id, img, 'banner'));
                    } else setBanner(null);
                  }}
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
                      dispatch(
                        bandEdit({ ...editInfo, public: !editInfo.public })
                      );
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
    band: state.bandReducer.band,
    image: state.infoReducer.image
  };
}

export default connect(mapStateToProps)(BandHeader);
export { BandHeader };
