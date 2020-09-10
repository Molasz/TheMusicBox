import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { connect } from 'react-redux';

import { DOMAIN } from '../../config/auth0';
import { saveUser, getUser } from '../../redux/actions/authActions';

import ProfileHeader from '../profileHeader/profileHeader';
import Bio from '../bandProfile/bio/bio';
import Following from './following/following';

import './userProfile.scss';

const UserProfile = ({ mongoUser, dispatch }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${DOMAIN}/api/v2/`,
          scope: 'read:current_user'
        });
        if (accessToken) {
          sessionStorage.setItem('token', JSON.stringify(accessToken));
          dispatch(saveUser(user.sub));
          dispatch(getUser(user));
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [dispatch, getAccessTokenSilently, user]);

  return isAuthenticated && mongoUser ? (
    <div className='userProfile'>
      <div className='userProfile__top'>
        <ProfileHeader
          logo={user.picture}
          banner='https://pyxis.nymag.com/v1/imgs/280/a09/831956806c59629838ae46bd3e08255aaa-12-concerts.rsocial.w1200.jpg'
        />
      </div>
      <div className='userProfile__bottom'>
        <div className='bottom__left'>
          <Bio bio={mongoUser.bio} name={mongoUser.user} />
          <p className='left__new-band'>aqui tamo x2</p>
        </div>
        <div className='bottom__right'>
          <Following following={mongoUser.following} />
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

function mapStateToProps(state) {
  return { mongoUser: state.authReducer.user };
}

export default connect(mapStateToProps)(
  withAuthenticationRequired(UserProfile, {
    onRedirecting: () => <div>Redirecting you to the login page...</div>
  })
);
export { UserProfile };
