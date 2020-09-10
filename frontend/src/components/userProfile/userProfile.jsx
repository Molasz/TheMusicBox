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

const UserProfile = ({ mongoUser, edit, match, dispatch }) => {
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

  const isEdit = edit ? 'edit' : '';

  return isAuthenticated && mongoUser && user ? (
    <div className={'userProfile'}>
      <div className='userProfile__top'>
        <ProfileHeader
          logo={mongoUser.photo}
          banner={mongoUser.banner}
          match={match}
          dispatch={dispatch}
          isEdit={isEdit}
        />
      </div>
      <div className='userProfile__bottom'>
        <div className='bottom__left'>
          <Bio bio={mongoUser.bio} name={mongoUser.user} isEdit={isEdit} />
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
  return {
    mongoUser: state.authReducer.user,
    edit: state.authReducer.editProfile
  };
}

export default connect(mapStateToProps)(
  withAuthenticationRequired(UserProfile, {
    onRedirecting: () => <div>Redirecting you to the login page...</div>
  })
);
export { UserProfile };
