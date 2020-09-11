import React from 'react';
import { connect } from 'react-redux';

import './userBio.scss';

import { editBio, editName } from '../../../../redux/actions/authActions';

function UserBio({ bio, name, editInfo, dispatch }) {
  return (
    <section className='bio'>
      <div className='bio__top'>
        {!(
          Object.keys(editInfo).length === 0 && editInfo.constructor === Object
        ) ? (
          <input
            className='title__name'
            value={editInfo.name}
            onChange={(event) => dispatch(editName(event.target.value))}
          />
        ) : (
          <strong className='title__name'>{name}</strong>
        )}
      </div>
      <div className='bio__bottom'>
        {!(
          Object.keys(editInfo).length === 0 && editInfo.constructor === Object
        ) ? (
          <textarea
            className='bottom__text'
            value={editInfo.bio}
            onChange={(event) => dispatch(editBio(event.target.value))}
          />
        ) : (
          <p className='bottom__text'>{bio}</p>
        )}
      </div>
    </section>
  );
}

function mapDispatchToProps(state) {
  return { editInfo: state.authReducer.editInfo };
}

export default connect(mapDispatchToProps)(UserBio);
export { UserBio };
