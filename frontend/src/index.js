import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import BandProfile from './components/bandProfile/bandProfile';

import './index.scss';

import discography from './components/bandProfile/discography/discography';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header isLogged={true} />
      <Switch>
        <Route path='/' exact component={discography} />
        <Route path='/band' exact component={BandProfile} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
