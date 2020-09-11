import React, { useState } from 'react';
import { connect } from 'react-redux';

import './userHeader.scss';

import onEdit from './onEdit';
import onSave from './onSave';

import Gear from '@material-ui/icons/Settings';
import Save from '@material-ui/icons/Save';

function ProfileHeader({ photo, banner, user, editInfo, match, dispatch }) {
  return (
    <>
      <img src={photo} alt='photo' className='top__photo' />
      <img src={banner} alt='Banner' className='top__banner' />
      <div className='top__info'>
        {match.path === '/profile' && (
          <Gear
            className='follow__gear'
            onClick={(event) => onEdit(event, user.user, user.bio, dispatch)}
          />
        )}
        {!(
          Object.keys(editInfo).length === 0 && editInfo.constructor === Object
        ) && (
          <Save
            className='follow__save'
            onClick={(event) => onSave(event, user._id, editInfo, dispatch)}
          />
        )}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { editInfo: state.authReducer.editInfo };
}

export default connect(mapStateToProps)(ProfileHeader);
export { ProfileHeader };
