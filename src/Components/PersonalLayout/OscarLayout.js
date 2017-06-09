import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import BackgroundImage from '../../Resources/Backgrounds/background.png';
import Drawer from '../../Components/Drawer/Drawer';
import profileImage from '../../Resources/ProfileImages/oscar.jpg';
import { Container, Row, Col } from 'react-grid-system';
import './OscarLayout.css';
import Profile from '../../Components/ProfileBig/ProfileBig';
import Description from '../../Components/Description/Description';
var CV = require('../../Resources/Resume/oscarResume.json');


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
			  <Header largeText = "Oscar Andell" smallText = "IT Student"/>
				<div  className="bodyBackground">
				<Container>
					<Row >
						<Col xl={4.1}>
							<Profile image={profileImage} name="Oscar Andell" title="IT student" email="Oscar@Andell.eu" location="Linköping, Sweden" github="https://github.com/OAndell/" linkdin="https://www.linkedin.com/in/oscar-andell-156ba0138/"/>
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
 