import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { connect } from 'react-redux';

import { DOMAIN } from '../../config/auth0';
import store from '../../redux/store';
import { saveUser } from '../../redux/actions/authActions';

const Profile = () => {
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
          store.dispatch(saveUser(user.sub));
        }
        setUserMetadata(user_metadata);
      } catch (err) {
        console.log(err.message);
      }
    };

    getUserMetadata();
  }, []);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          'No user metadata defined'
        )}
      </div>
    )
  );
};

function mapDispatchToProps(dispatch) {
  return { saveUser };
}

export default connect(
  null,
  mapDispatchToProps
)(
  withAuthenticationRequired(Profile, {
    onRedirecting: () => <div>Redirecting you to the login page...</div>
  })
);
