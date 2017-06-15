import React from 'react';
import ReactDOM from 'react-dom';
import './ImageCarousel.css';
import Slider from 'react-slick'
import Select from 'react-select';
import './react-select.css';
import {login} from "../networking/networking"


export default class ImageCarousel extends React.Component {

	constructor(props){
		super(props)
		this.images = props.images
    this.state ={ start:<h1 style= {{color:"gray"}}>choose category</h1>, selected: ""}
    this.logChange= this.logChange.bind(this)
    this.log = this.log.bind(this)
    this.options = []
    for (var key in this.images){
      this.options.push({value:key, label:key})

    }

    console.log(this.images)

	}

  logChange(val) {
    console.log(val)
    if (val != null){
  this.setState({
    selected:val,
    start:this.change(val.value)})
  }

}

  change(key){
    	var settings = {
    			dots: true,
    			arrows:true,
    			infinite: true,
    			speed: 500,
    			slidesToShow: 3,
    			slidesToScroll: 1,
    			className: 'container',


    		};

        let listSiteShow = [];
      if( this.images[key].length >0 ) {
        for(var i = 0; i<this.images[key].length; i++){
        listSiteShow.push( <div key={i}> <img src = {this.images[key][i]} className="imageContainer" /> </div> );
        }
      }else listSiteShow.push(<div></div>);

    const element = (
      <div className="container">
		  <Slider {...settings}>
			{listSiteShow}
		  </Slider>
	  </div>);
	return element
	}
	
	
	log(){
	  login("ss","bb", null)
	}
	render(){

    /* use key/value for intended purpose */
      let theSlider = null;


      for(var key in this.images){

        theSlider = this.change(key);
        break;
      }

		return (


			<div className="container">
        <button style={{width:"30", height:"30"}} onClick={this.log}></button>
        <Select
		  className='Select'
		  name="form-field-name"
		  value={this.state.selected}
		  options={this.options}
		  onChange={this.logChange}
		/>
        {this.state.start}

			</div>

		);
	  }
}
