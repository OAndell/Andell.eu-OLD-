import React from 'react';
import ReactDOM from 'react-dom';
import profileImage from '../../Resources/ProfileImages/oscar.jpg';
import { Container, Row, Col } from 'react-grid-system';
import './OscarMainBody.css';
import Profile from '../../Components/ProfileBig/ProfileBig';
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
						<Col xl={1}>
							<Profile image={profileImage} desc="Oscar Andell"/>
						</Col>
						<Col xl={7}>
						</Col>
					</Row>
				</Container>
			</div>
	);
  }
}


