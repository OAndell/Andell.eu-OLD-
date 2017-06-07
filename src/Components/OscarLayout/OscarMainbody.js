import React from 'react';
import ReactDOM from 'react-dom';
import profileImage from '../../Resources/ProfileImages/oscar.jpg';
import { Container, Row, Col } from 'react-grid-system';
import './OscarMainBody.css';
import Profile from '../../Components/ProfileBig/ProfileBig';
import Description from '../../Components/Description/Description';
//TODO create new  profile component
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
							<Profile image={profileImage} name="Oscar Andell" title="IT student" email="Oscar@Andell.eu" location="Linköping, Sweden"/>
						</Col>
						<Col xl={4.1}>
							<Description/>
						</Col>
					</Row>
				</Container>
			</div>
	);
  }
}


