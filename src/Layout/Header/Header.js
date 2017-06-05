import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
  render() {
	var headStyle = {
		color:'white',
		textAlign: 'center',
		lineHeight: '90%', margin: 'auto',
		width: '90%'};
		
    return(
		<div style={headStyle}>
			<br/>
			<h1>Header Text</h1>
			<h2>texti texti</h2>
			<br/>
		</div>
	);
  }
}