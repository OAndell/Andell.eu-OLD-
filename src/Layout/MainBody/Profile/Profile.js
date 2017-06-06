import React from 'react';
import ReactDOM from 'react-dom';
import './Profile.css';



export default class MainBody extends React.Component {
	constructor(props){
		super(props)
		this.image = props.image
		this.desc = props.desc
	}

  render() { 
    return(
		<div className="background">
			<img src={this.image} className="profileImage"/>
			<h2><a href=''>{this.desc}</a></h2>
		</div>
	);
  }
}