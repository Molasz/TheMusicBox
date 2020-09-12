import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './userBio.scss';

import { editBio, editName } from '../../../../redux/actions/authActions';

import GroupAddIcon from '@material-ui/icons/GroupAdd';

function UserBio({ bio, name, editInfo, dispatch }) {
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
        <p className='bottom__text'> Create your own band profile </p>
        <Link to='/newBand'>
          <GroupAddIcon className='bottom__icon' />
        </Link>
      </div>
    </section>
  );
}

function mapDispatchToProps(state) {
  return { editInfo: state.authReducer.editInfo };
}

export default connect(mapDispatchToProps)(UserBio);
export { UserBio };
