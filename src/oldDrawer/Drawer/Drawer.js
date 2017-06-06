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
    this.negtick =  this.negtick.bind(this)
    this.start = this.start.bind(this)
    this.negstart = this.negstart.bind(this)
    this.getChars = this.getChars.bind(this)

  }


  getChars(str){
    var x = Math.floor(this.maxWidth/str.length)
    this.setState({homeButtonText2:this.maxWidth/(str.length-1)})
    return (str.substring(0, Math.floor((this.state.Width-40)/x)))
  }
  neggetChars(str){
    var x = Math.floor(this.maxWidth/str.length)
    this.setState({homeButtonText2:this.maxWidth/(str.length-1)})
    return (str.substring(0, Math.floor((this.state.Width-42)/x)))
  }

  start(){
    this.interval = setInterval(this.tick,5)
  }
  negstart(){
    this.interval = setInterval(this.negtick, 5)
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
  negtick(){
    if (this.state.Width <= 50){
      this.stop()
      this.setState({
        drawerText:"D",
        homeButtonText:""
        })
      return null
    }
    this.setState({
      Width:this.state.Width - 10,
      drawerText:"D"+ this.neggetChars(this.drawerTitle),
      homeButtonText:this.neggetChars(this.homeButtonText)
    })

  }
  openDrawer(){
    this.stop()
    this.start()
  }
  closeDrawer(){
    this.stop()
    this.negstart()
  }


  render(){
    var drawerStyle = {
      height:"100vh",
      width:this.state.Width,
      background: 'linear-gradient(to bottom right, black, rgb(80, 80, 80))',
    }

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
    var textStyle = {
      float:"left",
      paddingLeft:"0",
      paddingRight:"0",
      paddingTop:"13",
      paddingBottom:"5",
      color:"gray",
      lineHeight:"0%",
      lineWidth:"0%"}

    return(
      <div style = {drawerStyle} onMouseEnter={this.openDrawer} onMouseLeave={this.closeDrawer}>
        <div style = {divStyle}>
          <h1 style= {textStyle}>{this.state.drawerText} </h1>
        </div>
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
