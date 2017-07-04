import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import TreeImg from '../../Resources/showcase/tree.png'
import './ShowcasePage.css';

export default class MainBody extends React.Component {
	constructor(props){
		super(props)
	}



   	render() {
	    return(
			<div  className="bodyBackground">
				<Container className="profileContainer">
				<br/>
				<Row >
					<Col xl={5}>
							<div className="showcaseDesc">
								<h2>Riksdagen</h2>
								<p>
									Android app to keep track of the Swedish parliament.
									<br/><br/>This android application uses the API from https://data.riksdagen.se/ to get latest information and events from the Swedish parliament.
									<br/><br/>My goal in creating this app was firstly to practice Java and Android development but also to create an accesible way to view the work that goes on in the Swedish parlement. An easy way to see what topics and questions are discussed by our politicians and how they vote on these issues.
								</p>
								<br/>
								<h3>Features:</h3>
								<ul>
									<p>
									<li>View the results of votes.</li>
									<li>Sort by party.</li>
									<li>Read new questions, motions and other documents put forward by the parties.</li>
									</p>
								</ul>
								<br/>
								<p><a href="https://github.com/OAndell/Riksdagen">View on github</a></p>
						</div>
					</Col>
						<img className="showcaseImg" src="https://raw.githubusercontent.com/OAndell/Riksdagen/master/screenshots/questionExample1.png"/>
						<img className="showcaseImg" src="https://raw.githubusercontent.com/OAndell/Riksdagen/master/screenshots/voteExample1.jpg"/>
					<Col xl={1}>
					</Col>
				</Row>
				<br/>
				<hr className="profiledivider"/>
				<br/>
					<Row >
						<Col xl={5}>
							<a href="http://andell.eu/TreeGen/"><img className="showcaseImg" src={TreeImg}/></a>
						</Col>
						<Col xl={5}>
							<div className="showcaseDesc">
								<h2>Fractal Tree Generator</h2>
								<p>Web application written in the javascript library p5. Recursivly generate an image of a fractal tree using parameters specified by the user.</p>
								<br/>
								<p><a href="https://github.com/CodingTrain/Rainbow-Code/tree/master/CodingChallenges/CC_14_FractalTree">Inspired by Daniel Shiffmans  Fractal Tree </a></p>
								<br/>
								<p><a href="http://andell.eu/TreeGen/">Try it out</a></p>
							</div>
						</Col>
					</Row>
					<br/>
					<hr className="profiledivider"/>
					<br/>
				</Container>
			</div>
		);
  	}
}
