import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header/Header';
import BackgroundImage from '../../Resources/Backgrounds/background.png';
import Drawer from '../../Components/Drawer/Drawer';
import { Container, Row, Col } from 'react-grid-system';
import Profile from '../../Components/ProfileBig/ProfileBig';
import Description from '../../Components/Description/Description';
var url = 'http://andell.eu/resume/mariaResume.json';


export default class MariaLayout extends React.Component {
	constructor(props){
		super(props)
		this.state = {desc : <br/>}
		this.getCV = this.getCV.bind(this);
		this.getCV();
    }

	getCV(){
		fetch(url, {mode: 'cors'})
			.then(res => res.json())
			.then(function(data) {
				this.setState({desc:<Description CV = {data}/>});
			}.bind(this))
		.catch(function(data) {
				console.log("error fetching resume");
				console.log(data);
		}.bind(this));
	}
  render() {
	var layoutStyle = {
		backgroundImage: `url(${BackgroundImage})`,
		backgroundRepeat: 'repeat',
		paddingBottom:"100px",
		positon: "absolute"
	};
    return (
      <div id ="outer-container">
      <Drawer/>
      <main id ="page-wrap">
    	<div style={layoutStyle}>
			  <Header largeText = "Maria Andell" smallText = ""/>
				<div className="bodyBackground">
				<Container>
					<Row >
						<Col xl={4.1}>
							<Profile image={"http://andell.eu/profileImages/maria.jpg"} name="Maria Andell" email="Maria@Andell.eu" location="Jönköping, Sverige" />
						</Col>
						<Col xl={4.1}>
							{this.state.desc}
						</Col>
					</Row>
				</Container>
			</div>
		</div>
      </main>
      </div>
	);
  }
}
