import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import BackgroundImage from '../../Resources/Backgrounds/background5.png';
import MainBody from '../../Components/MainBody/MainBody';
import Drawer from '../../Components/Drawer/Drawer';

export default class Layout extends React.Component {
  render() {
	var layoutStyle = {
		backgroundImage: `url(${BackgroundImage})`,
		height:'200vh',
		positon: "absolute"
	};
    return (
      <div id ="outer-container">
      <Drawer/>
      <main id ="page-wrap">
    	<div style={layoutStyle}>
			  <Header largeText = "Header Text" smallText = "asdasd"/>
			  <MainBody/>
		  </div>
      </main>
      </div>
	);
  }
}
