import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Components/Layout/Layout'
import ab from './Components/networking/bildernamn'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <main>
    <Switch>
      <Route exact path='/hj' component={Layout}/>
      <Route path='/bildernamn' component={ab}/>

    </Switch>
  </main>
  </BrowserRouter>
), document.getElementById('app'))

registerServiceWorker();
