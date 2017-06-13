import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import BackgroundImage from '../../Resources/Backgrounds/background.png';
import Drawer from '../../Components/Drawer/Drawer';
import { Container, Row, Col } from 'react-grid-system';
import Profile from '../../Components/ProfileBig/ProfileBig';
import Description from '../../Components/Description/Description';
var CV = require('../../Resources/Resume/stefanResume.json');


export default class StefanLayout extends React.Component {
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
			  <Header largeText = "Stefan Andell" smallText = ""/>
				<div className="bodyBackground">
				<Container>
					<Row >
						<Col xl={4.1}>
							<Profile image={"http://andell.eu/profileImages/stefan.jpg"} name="Stefan Andell" email="Stefan@Andell.eu" location="Jönköping, Sverige" />
						</Col>
						<Col xl={4.1}>
							<Description CV={CV}/>
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
 