import React from 'react';

import './profileHeader.scss';

import onEdit from './onEdit';

import Star from '@material-ui/icons/Grade';
import Gear from '@material-ui/icons/Settings';

function ProfileHeader({
  logo,
  banner,
  name,
  onFollow,
  followers,
  followIconClass,
  isBand,
  match,
  dispatch,
  isEdit
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
      <img src={logo} alt='Logo' className={`top__logo ${isEdit}`} />
      <img src={banner} alt='Banner' className={`top__banner ${isEdit}`} />
      <div className='top__info'>
        <strong className='info__name'>{name}</strong>
        <div className='info__follow'>
          {match.path === '/profile' && (
            <Gear
              className='follow__gear'
              onClick={(event) => onEdit(event, dispatch)}
            />
          )}
          {isBand && infoFollow}
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
