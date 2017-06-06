import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

export default class Header extends React.Component {
	constructor(props){
		super(props)
	}
  render() {	
    return(
		<div className="headerBackground">
			<br/>
			<div className="headerText">
				<h1>{this.props.largeText}</h1>
				<p>{this.props.smallText}</p>
			</div>
		</div>
	);
  }
}