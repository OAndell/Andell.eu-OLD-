import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import BackgroundImage from '../../Resources/Backgrounds/background.png';
import Drawer from '../../Components/Drawer/Drawer';
import { Container, Row, Col } from 'react-grid-system';
import Profile from '../../Components/ProfileBig/ProfileBig';
import Description from '../../Components/Description/Description';
var CV = require('../../Resources/Resume/antonResume.json');


export default class AntonLayout extends React.Component {
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
			  <Header largeText = "Anton Andell" smallText = ""/>
				<div className="bodyBackground">
				<Container>
					<Row >
						<Col xl={4.1}>
							<Profile image={"http://andell.eu/profileImages/anton.jpg"} name="Anton Andell" email="Anton@Andell.eu" location="Linköping, Sverige" />
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
 