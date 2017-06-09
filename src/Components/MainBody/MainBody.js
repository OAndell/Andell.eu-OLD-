import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../../Components/Profile/Profile';
import profile1 from '../../Resources/ProfileImages/oscar.jpg';
import profile2 from '../../Resources/ProfileImages/testProfile.png';
import { Container, Row, Col } from 'react-grid-system';
import './MainBody.css';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel'
import {getImages} from "../networking/networking"


export default class MainBody extends React.Component {
	constructor(props){
		super(props)
	}
  render() {
	var imageList = getImages();
	


    return(
			<div  className="bodyBackground">
				<Container className="profileContainer">
					<Row >
						<Col xl={2.9}>
							<div/>
						</Col>
						<Col xl={2.9}>
							<a href="/Stefan"><Profile image={profile2} desc="Stefan"/></a>
						</Col>
						<Col xl={2.9}>
							<a href="/Maria"><Profile image={profile2} desc="Maria"/></a>
						</Col>
					</Row>
					<Row >
						<Col xl={1.4}>
							<div/>
						</Col>
						<Col xl={2.9}>
							<a href="/Oscar"><Profile image={profile1} desc="Oscar" icon="fa fa-rebel"/></a>
						</Col>
						<Col xl={2.9}>
							<a href="/Anton"><Profile image={profile2} desc="Anton"/></a>
						</Col>
						<Col xl={2.9}>
							<a href="/Alice"><Profile image={profile2} desc="Alice"/></a>
						</Col>
					</Row>
				</Container>
				<br/>
				<hr className="pdivider"/>
				<br/>
				<h2>TEXT</h2>
				<ImageCarousel images={imageList}/>
				<br/>
				<br/>
				<hr className="pdivider"/>
			</div>
	);
  }
}

/* ALTERNATIV DESIGN
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

*/
