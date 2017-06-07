import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import BackgroundImage from '../../Resources/Backgrounds/background2.png';
import Drawer from '../../Components/Drawer/Drawer';

export default class OscarLayout extends React.Component {
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
			  < Header largeText = "Oscar Andell" smallText = "IT Student"/>
		  </div>
      </main>
      </div>
	);
  }
}
 