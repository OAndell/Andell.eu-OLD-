import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
<<<<<<< HEAD
import BackgroundImage from '../../Resources/Backgrounds/background4.png';
//import Drawer from "./Drawer/Drawer"
=======
import BackgroundImage from '../../Resources/Backgrounds/background2.png';
import Imagee from "../../Networking/NetworkImg"
>>>>>>> origin/master
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
          < Header largeText = "Header Text" smallText = "asdasd"/>
        <Imagee/> 
            <MainBody/>
    	  </div>
      </main>
      </div>
	);
  }
}
