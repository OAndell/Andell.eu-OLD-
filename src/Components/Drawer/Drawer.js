import React from "react"
import ReactDOM from "react-dom"
import { push as Menu } from 'react-burger-menu'
import "./Drawer.css"
import Icon from "../../Resources/menuicon.png"

export default class Drawer extends React.Component {
  constructor(props){
    super(props)
    this.state = {isOpen:"false"}


  }
  showSettings (event) {
    event.preventDefault();

  }

  render(){
  var isMenuOpen = function(state) {
    return state.isOpen;
  };

  return (

    <Menu  width = {200} onStateChange={isMenuOpen} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } customBurgerIcon={ <img src={Icon} />} >
      <h2><a id="home" className="menu-item" href="/">Home <i className="fa fa-home"></i></a></h2>
      <h2><a id="about" className="menu-item" href="/about">About <i className="fa fa-rebel"></i></a></h2>
      <h2><a id="contact" className="menu-item" href="/contact">Contact <i className="fa fa-image"></i></a></h2>
      <h2><a onClick={ this.showSettings } className="menu-item" href="">Settings <i className="fa fa-github"></i></a></h2>
    </Menu>
  );
}
}
