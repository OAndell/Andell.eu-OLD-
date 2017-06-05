import React from "react"
import ReactDOM from "react-dom"
import testImg from '../testimg.png'
import ImageButton from "../ImageButton/ImageButton"

export default class Drawer extends React.Component{
  constructor(props){
    super(props)
    this.state = { Width:50, drawerText:"D", homeButtonText:""}

    this.openDrawer = this.openDrawer.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)
  }

  openDrawer(){

    this.setState({
      Width:220,
      drawerText:"DRAWER",
      homeButtonText:"Home"
      })

  }
  closeDrawer(){

    this.setState({
      Width:50,
      drawerText:"D",
      homeButtonText:""
     })
  }


  render(){
    var drawerStyle = {
      height:"100vh",
      width:this.state.Width,
      backgroundColor:"red"}

    var buttonStyle = {
      paddingTop: "10px",
      paddingRight:"10px",
      height:"50",
      width:"50",
      float:"left",

    }

    return(
      <div style = {drawerStyle} onMouseOver={this.openDrawer} onMouseOut={this.closeDrawer}>
        <h1>{this.state.drawerText} </h1>
          <ImageButton image={testImg}/>
          <h1 style={{float:"left"}}>{this.state.homeButtonText}</h1>


      </div>
    );
  }
}
