import React from 'react';
import ReactDOM from 'react-dom';

export default class MainBody extends React.Component {
	constructor(props){
		super(props)
		this.image = props.image
		this.desc = props.desc
	}
  render() {  
  
	var backgroundStyle = {
		textAlign:'center',
		backgroundColor:'rgb(250,250,250)',
		width: '200px',
		height: '200px',
		border: '2px solid gray',
		borderRadius: '5px',
		
	}
  
	var imageStyle = {
		paddingTop:'10px',
		height: '150px',
		width: '150px',
		borderRadius: '70%',
	}
	
	var textStyle = {
		
	}
	
  
    return(
		<div style = {backgroundStyle}>
		
			<img src={this.image} style = {imageStyle}/>
			<p style={textStyle}>{this.desc}</p>
		</div>
		
	);
  }
}