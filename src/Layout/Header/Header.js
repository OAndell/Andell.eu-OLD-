import React from 'react';
import ReactDOM from 'react-dom';

//TODO: Backgrundsbild??
export default class Header extends React.Component {
  render() {
	var headerBackgroundStyle = {
	
		background: 'linear-gradient(to bottom right, black, rgb(55, 55, 55))',
		lineHeight: '70%',
		margin: 'auto',
		height: '125px',
		borderRadius: '5px',
		border: '2px solid grey'};
	
	var textStyle = {
		color:'White',
		float: 'right',
		margin: '20px',
		fontFamily: 'Ubuntu-sansSerif'
	}
		
    return(
		<div className="header" style={headerBackgroundStyle}>
			<br/>
			<div style={textStyle}>
				<h1>Header Text</h1>
				<p>some text</p>
			</div>
			
		</div>
	);
  }
}