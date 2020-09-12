import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './userBio.scss';

import {
  editBio,
  editName,
  newBand
} from '../../../../redux/actions/authActions';

import GroupAddIcon from '@material-ui/icons/GroupAdd';

function UserBio({ bio, name, editInfo, mongoUser, dispatch }) {
  return (
    <section className='user-bio'>
      <div className='user-bio__top'>
        {!(
          Object.keys(editInfo).length === 0 && editInfo.constructor === Object
        ) ? (
          <input
            className='top__input'
            value={editInfo.user}
            onChange={(event) => dispatch(editName(event.target.value))}
          />
        ) : (
          <strong className='top__name'>{name}</strong>
        )}
      </div>
      <div className='user-bio__middle'>
        {!(
          Object.keys(editInfo).length === 0 && editInfo.constructor === Object
        ) ? (
          <textarea
            className='middle__text-area'
            value={editInfo.bio}
            onChange={(event) => dispatch(editBio(event.target.value))}
          />
        ) : (
          <p className='middle__bio'>{bio}</p>
        )}
      </div>
      <div className='user-bio__bottom'>
        {mongoUser.band ? (
          <Link to={`band/${mongoUser.band._id}`}>
            <div className='bottom__logo'>
              <img src={mongoUser.band.logo} alt='logo' />
            </div>
            <p className='bottom__name'>{mongoUser.band.name}</p>
          </Link>
        ) : (
          <>
            <p className='bottom__text'> Create your own band profile </p>
            <GroupAddIcon
              className='bottom__icon'
              onClick={() => dispatch(newBand(mongoUser._id))}
            />
          </>
        )}
      </div>
    </section>
  );
}

function mapDispatchToProps(state) {
  return {
    editInfo: state.authReducer.editInfo,
    mongoUser: state.authReducer.user
  };
}

export default connect(mapDispatchToProps)(UserBio);
export { UserBio };
