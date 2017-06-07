import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Components/Layout/Layout'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"

ReactDOM.render((
  <BrowserRouter>
    <main>
    <Switch>
      <Route exact path='/' component={Layout}/>
      <Route path='/bildernamn' component={Layout}/>

    </Switch>
  </main>
  </BrowserRouter>
), document.getElementById('app'))

registerServiceWorker();
