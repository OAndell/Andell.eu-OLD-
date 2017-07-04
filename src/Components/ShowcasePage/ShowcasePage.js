import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import OscarShowcase from '../../Components/OscarShowcase/OscarShowcase'
import Drawer from '../../Components/Drawer/Drawer';
import TreeImg from '../../Resources/showcase/tree.png'
import BackgroundImage from '../../Resources/Backgrounds/background.png';
import { Container, Row, Col } from 'react-grid-system';

export default class ShowcasePage extends React.Component {

  	constructor(props) {
  		super(props);
  	}

  render(){
    var layoutStyle = {
			backgroundImage: `url(${BackgroundImage})`,
			backgroundRepeat: 'repeat',
			positon: "absolute",
			paddingBottom:"500px",
		};
		return (
      <div id ="outer-container">
				<Drawer/>
				<main id ="page-wrap">
					<div style={layoutStyle}>
						<Header largeText = "Showcase" smallText = "Projects by Oscar Andell"/>
						<div  className="bodyBackground">
              <OscarShowcase/>
						</div>
					</div>
				</main>
			</div>
		);
  }
}
