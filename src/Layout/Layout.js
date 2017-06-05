import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import BackgroundImage from '../Layout/background.png';
import Drawer from "./Drawer/Drawer"
import MainBody from "./MainBody/MainBody"

export default class Layout extends React.Component {
  render() {
	var layoutStyle = {
		backgroundImage: `url(${BackgroundImage})`,
		height:'200vh'
		};

    return (
		<div style={layoutStyle}>
			< Header largeText = "Header Text" smallText = "asdasd"/>
			<MainBody/>
      <div style= {{position:"absolute", zIndex:3}}>
			   <Drawer/>
      </div>
		</div>
	);
  }
}
