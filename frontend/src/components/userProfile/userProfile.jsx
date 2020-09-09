import React, { useEffect, useState } from 'react';
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
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${DOMAIN}/api/v2/`,
          scope: 'read:current_user'
        });
        const userDetailsByIdUrl = `https://${DOMAIN}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const { user_metadata } = await metadataResponse.json();

        if (accessToken) {
          sessionStorage.setItem('token', JSON.stringify(accessToken));
          dispatch(saveUser(user.sub));
          dispatch(getUser(user));
        }
        setUserMetadata(user_metadata);
      } catch (err) {
        console.log(err.message);
      }
    };

    getUserMetadata();
  }, []);

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
          <Following userId={mongoUser._id} />
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
