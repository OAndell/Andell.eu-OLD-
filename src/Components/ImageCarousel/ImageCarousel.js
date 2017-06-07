import React from 'react';
import ReactDOM from 'react-dom';
import './ImageCarousel.css';
import Slider from 'react-slick'


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}


export default class ImageCarousel extends React.Component {
	
	constructor(props){
		super(props)
		this.images = props.images;
	}
	
	
	render(){
		
		var settings = {
			dots: true,
			arrows:true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			className: 'container'
		};
		
		let listSiteShow = [];
	    if( this.images.length >0 ) {
			for(var i = 0; i<this.images.length; i++){
			listSiteShow.push( <div key={i}> <img src = {this.images[i]}className="imageContainer" /> </div> );
			}
		}
		else listSiteShow.push(<div></div>);
		
		return (
			<div className="container"> 
				<Slider {...settings}>
					{listSiteShow}
				</Slider>
			</div>
		);
	  }
}