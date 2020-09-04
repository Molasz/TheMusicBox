import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Profile from './components/profile/profile';
import BandProfile from './components/bandProfile/bandProfile';

import store from './redux/store';
import { Provider } from 'react-redux';

import { CLIENTID, DOMAIN, AUDIENCE, SCOPE } from './config/auth0';

import './index.scss';

render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENTID}
      redirectUri={window.location.origin}
      audience={AUDIENCE}
      scope={SCOPE}
      useRefreshTokens={true}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Header isLogged={false} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/profile' component={Profile} />
            <Route path='/band/:bandId' component={BandProfile} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
