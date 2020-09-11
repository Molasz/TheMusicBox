import React, { useState } from 'react';
import { connect } from 'react-redux';

import './userHeader.scss';

import onEdit from './onEdit';
import onSave from './onSave';

import Gear from '@material-ui/icons/Settings';
import Save from '@material-ui/icons/Save';

function ProfileHeader({ photo, banner, user, editInfo, match, dispatch }) {
  return (
    <section className='user-header'>
      <img src={photo} alt='photo' className='user-header__photo' />
      <div className='user-header__banner'>
        <img src={banner} alt='Banner' className='banner__img' />
      </div>
      <div className='user-header__edit'>
        {match.path === '/profile' && (
          <Gear
            className='edit__gear'
            onClick={(event) => onEdit(event, user.user, user.bio, dispatch)}
          />
        )}
        {!(
          Object.keys(editInfo).length === 0 && editInfo.constructor === Object
        ) && (
          <Save
            className='edit__save'
            onClick={(event) => onSave(event, user._id, editInfo, dispatch)}
          />
        )}
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return { editInfo: state.authReducer.editInfo };
}

export default connect(mapStateToProps)(ProfileHeader);
export { ProfileHeader };
