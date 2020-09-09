import React from 'react';

import './profileHeader.scss';

import Star from '@material-ui/icons/Grade';

function ProfileHeader({
  logo,
  banner,
  name,
  onFollow,
  followers,
  followIconClass
}) {
  return (
    <>
      <img src={logo} alt='Logo' className='top__logo' />
      <img src={banner} alt='Banner' className='top__banner' />
      <div className='top__info'>
        <strong className='info__name'>{name}</strong>
        <div className='info__follow'>
          <div className='follow__container'>
            <Star
              className={`contanier__icon ${followIconClass}`}
              id='follow'
              onClick={onFollow}
            />
            <p className='follow__count'> {followers} Followers</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
