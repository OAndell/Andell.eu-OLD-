import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import Drawer from '../../Components/Drawer/Drawer';
import TreeImg from '../../Resources/showcase/tree.png'
import BackgroundImage from '../../Resources/Backgrounds/background.png';
import './ShowcasePage.css';
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
						<Header largeText = "Showcase" smallText = "Projekt av Oscar Andell"/>
						<div  className="bodyBackground">
							<Container className="profileContainer">
								<Row >
									<Col xl={5}>
										<a href="http://andell.eu/TreeGen/"><img className="showcaseImg" src={TreeImg}/></a>
									</Col>
									<Col xl={5}>
										<div className="showcaseDesc">
											<h2>Trädskapare</h2>
											<p>Webb application skriven i Javascript bibloteket p5. Generar bilder av träd utifrån parametrar som skjusteras av användaren.</p>
											<br/>
											<p><a href="http://andell.eu/TreeGen/">Testa appen här</a></p>
										</div>
									</Col>
								</Row>
							</Container>
						</div>
					</div>
				</main>
			</div>
		);
  }
}
