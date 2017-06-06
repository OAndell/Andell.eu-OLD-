import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../../Components/Profile/Profile';
import profile1 from '../../Resources/ProfileImages/oscar.jpg';
import profile2 from '../../Resources/ProfileImages/testProfile.jpg';
import { Container, Row, Col } from 'react-grid-system';
import './MainBody.css';

export default class MainBody extends React.Component {
	constructor(props){
		super(props)
	}
  render() {

    return(
			<div  className="bodyBackground">
				<h2>TEXT</h2>
				<Container>
					<Row>
						<Col xl={2.4}>
							<Profile image={profile1} desc="Oscar Andell"/>
						</Col>
						<Col xl={2.4}>
							<Profile image={profile2} desc="Banan1"/>
						</Col>
						<Col xl={2.4}>
							<Profile image={profile2} desc="Banan2"/>
						</Col>
						<Col xl={2.4}>
							<Profile image={profile2} desc="Banan3"/>
						</Col>
						<Col xl={2.4}>
							<Profile image={profile2} desc="Banan4"/>
						</Col>
					</Row>
				</Container>
				<br/>
				<hr className="divider"/>
				<br/>
				<h2>TEXT</h2>
			</div>
	);
  }
}


