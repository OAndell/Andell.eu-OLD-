import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import BackgroundImage from '../../Resources/Backgrounds/background.png';
import MainBody from '../../Components/MainBody/MainBody';
import Drawer from '../../Components/Drawer/Drawer';

export default class Layout extends React.Component {
  render() {
	var layoutStyle = {
		backgroundImage: `url(${BackgroundImage})`,
		//backgroundColor:'#252839',
		height:'200vh',
		positon: "absolute"
	};
    return (
      <div id ="outer-container">
      <Drawer/>
      <main id ="page-wrap">
    	<div style={layoutStyle}>
			  <Header largeText = "Andell.eu" smallText = ""/>
			  <MainBody/>
		  </div>
      </main>
      </div>
	);
  }
}
