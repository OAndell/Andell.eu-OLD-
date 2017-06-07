import React from 'react';
import ReactDOM from 'react-dom';
import './ProfileBig.css';

export default class ProfileBig extends React.Component {
	constructor(props){
		super(props)
		this.image = props.image
		this.desc = props.desc
	}

  render() { 
    return(
			<div className="profileBackground">
			
			</div>
	);
  }
}