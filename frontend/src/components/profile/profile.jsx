import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { DOMAIN } from '../../config/auth0';
import { withAuthenticationRequired } from '@auth0/auth0-react';

let accessToken = null;

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = DOMAIN;

      try {
        accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user'
        });
        console.log(accessToken);
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (err) {
        console.log(err.message);
      }
    };

    getUserMetadata();
  }, []);

  if (accessToken) sessionStorage.setItem('token', JSON.stringify(accessToken));

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

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>
});
