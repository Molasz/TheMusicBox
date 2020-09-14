import React from 'react';
import { connect } from 'react-redux';

import './userHeader.scss';

import onSave from './onSave';

import { userEdit } from '../../../../redux/actions/authActions';

import Gear from '@material-ui/icons/Settings';
import Save from '@material-ui/icons/Save';

function ProfileHeader({ photo, banner, user, editInfo, dispatch }) {
  return (
    <section className='user-header'>
      <img src={photo} alt='user' className='user-header__photo' />
      <div className='user-header__banner'>
        <img src={banner} alt='Banner' className='banner__img' />
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
            onClick={(event) => onSave(event, user._id, editInfo)}
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
