import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import BackgroundImage from '../../Resources/Backgrounds/background4.png';
//import Drawer from "./Drawer/Drawer"
import MainBody from '../../Components/MainBody/MainBody';

export default class Layout extends React.Component {
  render() {
	var layoutStyle = {
		backgroundImage: `url(${BackgroundImage})`,
		height:'200vh'
		};
    return (
		<div style={layoutStyle}>
			< Header largeText = "Header Text" smallText = "asdasd"/>
			<div style= {{position:"absolute", zIndex:3}}>
			 
			</div>
			<MainBody/>
		</div>
	);
  }
}
