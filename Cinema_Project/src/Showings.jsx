import React from 'react';
import {Link} from 'react-router';
import CinemaStore from './store/CinemaStore';

export default class Showings extends React.Component{
	constructor(){
		
		super();
		
		this.state={
			movieID:"0",
			cinemaID:"-1",
			selection:"-1"
		}
	}
	
	updateCinemaSelect(e) {
		let id = e.target.value;
		this.setState({cinemaID: id});
		let target = parseInt(e.target.value);
		target += 1;
		this.setState({selection: e.target[target].text});
		
	}
	
	componentWillMount(){
		let movieID = this.props.movieID;
		this.setState({movieID: movieID});
		
	}
		

		render(){
	
	var testData = CinemaStore.getAllShowings();

		
		let self = this;
		
	let activeShowings = testData.map(function(showingDetails, showingIndex ) {
		if (showingDetails.cinemaID == self.state.cinemaID && showingDetails.movieID == self.state.movieID){
			let bookingURL = "Booking/" + showingIndex;
			
			
			
		return <span key={showingIndex}><Link to={{ pathname: bookingURL, query: { cName: self.state.selection }}}>{showingDetails.showingTime}</Link>, </span>;
		
		}
    });
	
	
		
		return(
		<div>
			<select value={this.state.cinemaID} onChange={this.updateCinemaSelect.bind(this)}>
				<option value="-1">Select a Cinema</option>
				<option value="0">Manchester</option>
				<option value="1">London</option>
				<option value="2">Gloucester</option>
				<option value="3">Cardiff</option>
			</select>
			<div>Cinema Selected: {this.state.cinemaID}<br/>{activeShowings}</div>
			
		</div>
		);
		
	}
	
}

Showings.defaultProps = {
		movieID: '1'
		
	}