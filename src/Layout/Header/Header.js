import React from 'react';
import ReactDOM from 'react-dom';

//TODO: Backgrundsbild??
export default class Header extends React.Component {
	constructor(props){
		super(props)
	}
	
  render() {
	var headerBackgroundStyle = {
		background: 'linear-gradient(to bottom right, black, rgb(70, 70, 70))',
		lineHeight: '70%',
		margin: 'auto',
		height: '125px',
		borderRadius: '5px',
		border: '2px solid grey'};
	
	var textStyle = {
		color:'White',
		float: 'right',
		margin: '20px',
	}
		
    return(
		<div style={headerBackgroundStyle}>
			<br/>
			<div style={textStyle}>
				<h1>{this.props.largeText}</h1>
				<p>{this.props.smallText}</p>
			</div>
		</div>
	);
  }
}