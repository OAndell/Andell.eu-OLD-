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
			<Menu  width = {230} onStateChange={isMenuOpen} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } customBurgerIcon={ <img src={Icon} />} >
			<h2><a id="home" className="menu-item" href="#/">Hem <i className="fa fa-home"></i></a></h2>
			<h2><a id="image" className="menu-item" href="#/images">Bildgalleri <i className="fa fa-image"></i></a></h2>
			<h2><a id="login" className="menu-item" href="#edit">Login <i className="fa fa-cog"></i></a></h2>
			</Menu>
		);
	}
}
