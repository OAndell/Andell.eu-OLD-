import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../../Components/Profile/Profile';
import { Container, Row, Col } from 'react-grid-system';
import './MainBody.css';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel'
import {getImages} from "../networking/networking"

/* 
 Component that holds the central content of the mainpage. Side meny and header not included.
*/

export default class MainBody extends React.Component {
	constructor(props){
		super(props)
	}
	
	getProfileImage(name){
		return "http://andell.eu/profileImages/"+ name +".jpg";
	}
	
   	render() {
	    return(
			<div  className="bodyBackground">
				<Container className="profileContainer">
					<Row >
						<Col xl={2.9}>
							<div/>
						</Col>
						<Col xl={2.9}>
							<a href="#/Stefan"><Profile image={this.getProfileImage("stefan")} desc="Stefan"/></a>
						</Col>
						<Col xl={2.9}>
							<a href="#/Maria"><Profile image={this.getProfileImage("maria")} desc="Maria"/></a>
						</Col>
					</Row>
					<Row >
						<Col xl={1.4}>
							<div/>
						</Col>
						<Col xl={2.9}>
							<a href="#/Oscar"><Profile image={this.getProfileImage("oscar")} desc="Oscar" icon="fa fa-rebel"/></a>
						</Col>
						<Col xl={2.9}>
							<a href="#/Anton"><Profile image={this.getProfileImage("anton")} desc="Anton"/></a>
						</Col>
						<Col xl={2.9}>
							<a href="#/Alice"><Profile image={this.getProfileImage("alice")} desc="Alice"/></a>
						</Col>
					</Row>
				</Container>
			</div>
		);
  	}
}

