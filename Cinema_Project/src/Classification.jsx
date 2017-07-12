import React from 'react';
import showingJson from './data/ShowingTimes.json';
import movieJson from './data/MovieDetails.json';
import {Link} from 'react-router';

export default class Classification extends React.Component{
	constructor(props){
		super();
		
		this.state = {
			
		}
	}
	
	render(){
		return(
			<div className="classificationsDiv">
				<img className="classificationsImg" src="/images/Classifications.png"></img>
			</div>
		);
	}
}