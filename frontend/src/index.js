import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import BandProfile from './components/bandProfile/bandProfile';

import { Provider } from 'react-redux';
import store from './redux/store';

import { DOMAIN, CLIENTID, AUDIENCE, SCOPE } from './config/auth0';

import './index.scss';

render(
  <Provider store={store}>
    <React.StrictMode>
      <Auth0Provider
        domain={DOMAIN}
        clientId={CLIENTID}
        redirectUri={`${window.location.origin}/profile`}
        audience={AUDIENCE}
        scope={SCOPE}
        useRefreshTokens={true}
      >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/band/:bandId' component={BandProfile} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Auth0Provider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
