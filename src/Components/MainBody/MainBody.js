import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../../Components/Profile/Profile';
import profile1 from '../../Resources/ProfileImages/oscar.jpg';
import profile2 from '../../Resources/ProfileImages/testProfile.jpg';
import { Container, Row, Col } from 'react-grid-system';
import './MainBody.css';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel'

export default class MainBody extends React.Component {
	constructor(props){
		super(props)
	}
  render() {
	  
	//Image List test here WAIT FOR BACKEND STUFF
	var imageList = [];
	imageList.push("http://andell.eu/onewebstatic/5d12831ece-parasail-DSC_0040.JPG");
	imageList.push("http://andell.eu/onewebstatic/5d12831ece-parasail-DSC_0040.JPG");
	imageList.push("http://andell.eu/onewebstatic/5d12831ece-parasail-DSC_0040.JPG");

    return(
			<div  className="bodyBackground">
				<h2>TEXT</h2>
				<Container className="profileContainer">
					<Row >
						<Col xl={3.3}>
							<div/>
						</Col>
						<Col xl={2.4}>
							<Profile image={profile2} desc="Stefan"/>
						</Col>
						<Col xl={2.4}>
							<Profile image={profile2} desc="Maria"/>
						</Col>
					</Row>
					<Row >
						<Col xl={2}>
							<div/>
						</Col>
						<Col xl={2.4}>
							<Profile image={profile1} desc="Oscar" icon="fa fa-rebel"/>
						</Col>
						<Col xl={2.4}>
							<Profile image={profile2} desc="Anton"/>
						</Col>
						<Col xl={2.4}>
							<Profile image={profile2} desc="Alice"/>
						</Col>
					</Row>
				</Container>
				<br/>
				<hr className="divider"/>
				<br/>
				<h2>TEXT</h2>
				<ImageCarousel images={imageList}/>
				<br/>
				<br/>
				<hr className="divider"/>
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


