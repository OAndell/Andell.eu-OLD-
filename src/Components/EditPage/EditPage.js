import React from "react"
import ReactDOM from "react-dom"
import Header from '../../Components/Header/Header';
import Drawer from '../../Components/Drawer/Drawer';
import BackgroundImage from '../../Resources/Backgrounds/background.png';

export default class EditPage extends React.Component {

  	constructor(props) {
  		super(props);
  	}

  render(){
    var layoutStyle = {
			backgroundImage: `url(${BackgroundImage})`,
			height:'200vh',
			positon: "absolute"
		};
		return (
      <div id ="outer-container">
				<Drawer/>
				<main id ="page-wrap">
					<div style={layoutStyle}>
						<Header largeText = "Under constrution" smallText = ""/>
					</div>
				</main>
			</div>
		);
  }
}
