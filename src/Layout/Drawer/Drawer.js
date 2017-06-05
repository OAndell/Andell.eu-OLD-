import React from "react"
import ReactDOM from "react-dom"
import testImg from '../testimg.png'
import ImageButton from "../ImageButton/ImageButton"

export default class Drawer extends React.Component{
  constructor(props){
    super(props)

    this.homeButtonText = "Home"
    this.drawerTitle = "RAWER"
    this.maxWidth = 200
    this.state = { Width:50, drawerText:"D", homeButtonText:"", homeButtonText2:""}


    this.openDrawer = this.openDrawer.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)
    this.tick =  this.tick.bind(this)
    this.start = this.start.bind(this)
    this.getChars = this.getChars.bind(this)

  }


  getChars(str){
    var x = Math.floor(this.maxWidth/str.length)
    this.setState({homeButtonText2:this.maxWidth/(str.length-1)})
    return (str.substring(0, Math.floor((this.state.Width-25)/x)))
  }

  start(){
    this.interval = setInterval(this.tick, 20)
  }
  stop(){
      clearInterval(this.interval)
  }
  tick(){
    if (this.state.Width >= this.maxWidth){
      this.stop()
      this.setState({
        drawerText:"D"+this.drawerTitle,
        homeButtonText:this.homeButtonText
        })
      return null
    }
    this.setState({
      Width:this.state.Width + 10,
      drawerText:"D"+ this.getChars(this.drawerTitle),
      homeButtonText:this.getChars(this.homeButtonText)
    })

  }
  openDrawer(){
    this.start()
  }
  closeDrawer(){
    this.stop()
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
      paddingTop:"20px",
      paddingBottom: "20px",
      paddingRight:"10px",
      font:"10",
      height:"50",
      width:"50",
      float:"left",

    }
    var divStyle= {
      float:"left"
    }
    var textStyle = {float:"left",paddingLeft:"0", paddingRight:"0", paddingTop:"13", paddingBottom:"5", lineHeight:"0%", lineWidth:"0%"}

    return(
      <div style = {drawerStyle} onMouseOver={this.openDrawer} onMouseOut={this.closeDrawer}>
        <h1>{this.state.drawerText} </h1>

        <div style={divStyle}>
          <ImageButton image={testImg}/>
          <h1 style={textStyle}>{this.state.homeButtonText}</h1>
        </div>
        <div style={divStyle}>
          <ImageButton image={testImg}/>
          <h1 style={textStyle}>{this.state.homeButtonText}</h1>
        </div>


      </div>
    );
  }
}
