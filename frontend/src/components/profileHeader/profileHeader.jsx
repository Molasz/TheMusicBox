import React from 'react';
import { connect } from 'react-redux';

import './profileHeader.scss';

import onEdit from './onEdit';
import onSave from './onSave';

import Star from '@material-ui/icons/Grade';
import Gear from '@material-ui/icons/Settings';
import Save from '@material-ui/icons/Save';

function ProfileHeader({
  logo,
  banner,
  name,
  user,
  onFollow,
  followers,
  followIconClass,
  isBand,
  editInfo,
  match,
  dispatch
}) {
  const infoFollow = (
    <div className='follow__container'>
      <Star
        className={`contanier__icon ${followIconClass}`}
        id='follow'
        onClick={onFollow}
      />
      <p className='follow__count'> {followers} Followers</p>
    </div>
  );

  return (
    <>
      <img src={logo} alt='Logo' className='top__logo' />
      <img src={banner} alt='Banner' className='top__banner' />
      <div className='top__info'>
        <strong className='info__name'>{name}</strong>
        <div className='info__follow'>
          {match.path === '/profile' && (
            <Gear
              className='follow__gear'
              onClick={(event) => onEdit(event, user.user, user.bio, dispatch)}
            />
          )}
          {!(
            Object.keys(editInfo).length === 0 &&
            editInfo.constructor === Object
          ) && (
            <Save
              className='follow__save'
              onClick={(event) => onSave(event, user._id, editInfo, dispatch)}
            />
          )}
          {isBand && infoFollow}
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { editInfo: state.authReducer.editInfo };
}

export default connect(mapStateToProps)(ProfileHeader);
export { ProfileHeader };
