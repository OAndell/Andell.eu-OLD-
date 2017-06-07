import React from "react"
import ReactDOM from "react-dom"


export default class ImageButton extends React.Component{
  constructor(props) {
    super(props);   // This binding is necessary to make `this` work in the callback
    this.image = props.image
    this.state = {brightness:"brightness(65%)"};
    this.click = this.click.bind(this)
    this.mouseOver = this.mouseOver.bind(this)
}
  click(){
    this.setState({brightness:"brightness(65%)"})
  }


  render(){
    var buttonStyle = {
      paddingTop: "10px",
      paddingRight:"10px",
      height:"50",
      width:"50",
      float:"left",
      filter:this.state.brightness

    }


    return(
        <img src={this.image}
        style={buttonStyle}
        onClick=

    );
  }
}
