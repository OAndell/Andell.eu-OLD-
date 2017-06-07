import React from 'react';
import ReactDOM from 'react-dom';
import './ProfileBig.css';

export default class ProfileBig extends React.Component {
	constructor(props){
		super(props)
		this.image = props.image
		this.name = props.name
		this.title = props.title
		this.email = props.email
		this.location = props.location
	}

  render() { 
    return(
			<div className="profileBackground">
				<img src={this.image} className="bigProfileImage"/>
				<h1>{this.name}</h1>
				<h2>{this.title}</h2>
				<hr className="profiledivider"/>
				<div className="profileTextHolder">
					<p><i className="fa fa-location-arrow"></i> {this.location}</p>
					<p><i className="fa fa-envelope"></i> {this.email}</p>
				</div>
			</div>
	);
  }
}