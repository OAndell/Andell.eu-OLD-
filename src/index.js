import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Components/Layout/Layout'
import OscarLayout from './Components/PersonalLayout/OscarLayout'
import StefanLayout from './Components/PersonalLayout/StefanLayout'
import AntonLayout from './Components/PersonalLayout/AntonLayout'
import AliceLayout from './Components/PersonalLayout/AliceLayout'
import MariaLayout from './Components/PersonalLayout/MariaLayout'
import EditPage from './Components/EditPage/EditPage'
import ImagePage from './Components/ImagePage/ImagePage'
import ShowcasePage from './Components/ShowcasePage/ShowcasePage'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {HashRouter , Switch, Route} from "react-router-dom"
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

ReactDOM.render((
   <HashRouter>
	<Switch>
	<Route exact path='/' component={Layout}/>
      <Route path='/bildernamn' component={Layout}/>
	  <Route path='/Oscar' component={OscarLayout}/>
	  <Route path='/Stefan' component={StefanLayout}/>
	  <Route path='/Anton' component={AntonLayout}/>
	  <Route path='/Alice' component={AliceLayout}/>
	  <Route path='/Maria' component={MariaLayout}/>
	  <Route path='/Edit' component={EditPage}/>
	  <Route path='/Images' component={ImagePage}/>
	  <Route path='/Showcase' component={ShowcasePage }/>
	</Switch>
  </HashRouter>

), document.getElementById('app'))

registerServiceWorker();
