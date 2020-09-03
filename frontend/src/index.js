import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import BandProfile from './components/bandProfile/bandProfile';

import store from './redux/store';
import { Provider } from 'react-redux';

import './index.scss';

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header isLogged={true} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/band/:bandId' component={BandProfile} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
