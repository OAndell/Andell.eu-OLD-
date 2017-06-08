import React from 'react';
import ReactDOM from 'react-dom';
import profileImage from '../../Resources/ProfileImages/oscar.jpg';
import { Container, Row, Col } from 'react-grid-system';
import './OscarMainBody.css';
import Profile from '../../Components/ProfileBig/ProfileBig';
import Description from '../../Components/Description/Description';
//import CV from '../../Resources/Resume/testResume.json';
//const CV = require('../../Resources/Resume/testResume.json'); 
var CV = require('../../Resources/Resume/testResume.json');

export default class OscarMainBody extends React.Component {
	constructor(props){
		super(props)
	}
  render() {
    return(
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
	);
  }
}


