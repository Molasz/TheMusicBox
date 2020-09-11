import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { connect } from 'react-redux';

import { DOMAIN } from '../../../config/auth0';
import { saveUser, getUser } from '../../../redux/actions/authActions';

import ProfileHeader from '../profileHeader/profileHeader';
import Bio from '../bio/bio';
import Following from './following/following';

import PuffLoader from 'react-spinners/PuffLoader';

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

  return isAuthenticated && mongoUser && user ? (
    <div className={'userProfile'}>
      <div className='userProfile__top'>
        <ProfileHeader
          logo={mongoUser.photo}
          banner={mongoUser.banner}
          match={match}
          dispatch={dispatch}
          edit={edit}
          user={mongoUser}
        />
      </div>
      <div className='userProfile__bottom'>
        <div className='bottom__left'>
          <Bio
            bio={mongoUser.bio}
            name={mongoUser.user}
            edit={edit}
            dispatch={dispatch}
          />
          <p className='left__new-band'>aqui tamo x2</p>
        </div>
        <div className='bottom__right'>
          <Following following={mongoUser.following} />
        </div>
      </div>
    </div>
  ) : (
    <PuffLoader color='#f55110' />
  );
};

function mapStateToProps(state) {
  return {
    mongoUser: state.authReducer.user
  };
}

export default connect(mapStateToProps)(
  withAuthenticationRequired(UserProfile, {
    onRedirecting: () => <div>Redirecting you to the login page...</div>
  })
);
export { UserProfile };
