import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './userHeader.scss';

import {
  userEdit,
  sendUserEditInfo
} from '../../../../redux/actions/authActions';
import { uploadImage } from '../../../../redux/actions/infoActions';

import Gear from '@material-ui/icons/Settings';
import Save from '@material-ui/icons/Save';

function ProfileHeader({ user, editInfo, image, dispatch }) {
  const [photo, setPhoto] = useState();
  const [banner, setBanner] = useState();

  const [photoInput, setPhotoInput] = useState(null);
  const [bannerInput, setBannerInput] = useState(null);

  useEffect(() => {
    if (image.indentifier === 'profile-photo') {
      setPhoto(image.path);
    } else if (image.indentifier === 'banner') {
      setBanner(image.path);
    }
  }, [image]);

  useEffect(() => {
    if (
      (photo === null || typeof photo === 'string') &&
      (banner === null || typeof banner === 'string')
    ) {
      const data = { ...editInfo };
      if (photo) data.photo = photo;
      if (banner) data.banner = banner;
      dispatch(sendUserEditInfo(user._id, data));
      dispatch(userEdit({}));
    }
  }, [photo, banner]);

  return (
    <section className='user-header'>
      <img
        src={user.photo}
        alt='user'
        className='user-header__photo'
        onClick={() => {
          if (editInfo.user) photoInput.click();
        }}
      />
      <input
        type='file'
        name='file'
        style={{ display: 'none' }}
        ref={(fileInput) => setPhotoInput(fileInput)}
        onChange={(event) => setPhoto(event.target.files[0])}
      />
      <div className='user-header__banner'>
        <img
          src={user.banner}
          alt='Banner'
          className='banner__img'
          onClick={() => {
            if (editInfo.user) bannerInput.click();
          }}
        />

        <input
          type='file'
          name='file'
          style={{ display: 'none' }}
          ref={(fileInput) => setBannerInput(fileInput)}
          onChange={(event) => setBanner(event.target.files[0])}
        />
      </div>
      <div className='user-header__edit'>
        <Gear
          className={`edit__gear ${
            editInfo.user === undefined ? 'white' : 'orange'
          }`}
          onClick={(event) =>
            dispatch(
              userEdit(
                editInfo.user === undefined
                  ? { user: user.user, bio: user.bio }
                  : {}
              )
            )
          }
        />
        {editInfo.user && (
          <Save
            className='edit__save'
            onClick={(event) => {
              if (photo) {
                const img = new FormData();
                img.append('file', photo);
                dispatch(uploadImage(user._id, img, 'profile-photo'));
              } else setPhoto(null);

              if (banner) {
                const img = new FormData();
                img.append('file', banner);
                dispatch(uploadImage(user._id, img, 'banner'));
              } else setBanner(null);
            }}
          />
        )}
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    editInfo: state.authReducer.editInfo,
    user: state.authReducer.user,
    image: state.infoReducer.image
  };
}

export default connect(mapStateToProps)(ProfileHeader);
export { ProfileHeader };
