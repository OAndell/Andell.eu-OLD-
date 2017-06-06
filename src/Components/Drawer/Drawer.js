import React from "react"
import ReactDOM from "react-dom"
import { slide as Menu } from 'react-burger-menu'
import "./Drawer.css"
import Icon from "../../Resources/testimg.png"

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

    <Menu  width = {100} onStateChange={isMenuOpen} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
    </Menu>
  );
}
}
