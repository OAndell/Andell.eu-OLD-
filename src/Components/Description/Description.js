import React from 'react';
import ReactDOM from 'react-dom';
import './Description.css';

export default class Description extends React.Component {
	constructor(props){
		super(props)
		this.lang  = props.lang
		this.CV = props.CV
		this.parseJson = this.parseJson.bind(this);
	}
	
	
	parseJson(){
		var sections = [];
		for (var key in this.CV) {
			var value = this.CV[key];
			sections.push(
				<div>
					<h2><i className={value.icon}/> {value.title}</h2>
					<h3>{value.underTitle}</h3>
					<p className="date">{value.date}</p>
					<br/>
					<p>{value.summary}</p>
					<br/>
				</div>
			);
		}	
		return(
			<div>{sections}</div>
		);
	}
	

  render() { 
    return(
			<div className="resumeHolder">
					{this.parseJson()}
			</div>
	);
  }
}