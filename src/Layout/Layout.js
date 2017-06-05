import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import BackgroundImage from '../Layout/background2.png';
import Drawer from "./Drawer/Drawer"

export default class Layout extends React.Component {
  render() {
	var layoutStyle = {
		backgroundImage: `url(${BackgroundImage})`,
		height:'100vh'
		};

    return (
		<div style={layoutStyle}>
			< Header/>
      <Drawer/>
		</div>
	);
  }
}
