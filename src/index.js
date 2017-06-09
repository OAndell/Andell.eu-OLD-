import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Components/Layout/Layout'
import OscarLayout from './Components/PersonalLayout/OscarLayout'
import StefanLayout from './Components/PersonalLayout/StefanLayout'
import AntonLayout from './Components/PersonalLayout/AntonLayout'
import AliceLayout from './Components/PersonalLayout/AliceLayout'
import MariaLayout from './Components/PersonalLayout/MariaLayout'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"

ReactDOM.render((
  <BrowserRouter>
    <main>
    <Switch>
      <Route exact path='/' component={Layout}/>
      <Route path='/bildernamn' component={Layout}/>
	  <Route path='/Oscar' component={OscarLayout}/>
	  <Route path='/Stefan' component={StefanLayout}/>
	  <Route path='/Anton' component={AntonLayout}/>
	  <Route path='/Alice' component={AliceLayout}/>
	  <Route path='/Maria' component={MariaLayout}/>
    </Switch>
  </main>
  </BrowserRouter>
), document.getElementById('app'))

registerServiceWorker();
