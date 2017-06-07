import React from 'react';
import ReactDOM from 'react-dom';
import './Profile.css';



export default class Profile extends React.Component {
	constructor(props){
		super(props)
		this.image = props.image
		this.desc = props.desc
		this.icon = props.icon
	}

  render() { 
    return(
		<a href="/Oscar">
			<div className="background">
				<img src={this.image} className="profileImage"/>
				<h2 className="name"><a href=''>{this.desc} <i className={this.icon}></i></a></h2>
			</div>
		</a>
	);
  }
}