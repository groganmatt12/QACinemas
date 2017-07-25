import React from 'react';
import {Link} from 'react-router';
import CinemaStore from './store/CinemaStore';

export default class Showings extends React.Component{
	constructor(){
		
		super();
		
		this.state={
			movieID:"0",
			cinemaID:"-1",
			selection:"-1",
			showingInfo: CinemaStore.getAllShowings(),
			cinemaInfo: CinemaStore.getAllCinemas()
		}
	}
	
	updateCinemaSelect(e) {
		let id = e.target.value;
		this.setState({cinemaID: id});
		let target = parseInt(e.target.value,10);
		target += 1;
		this.setState({selection: e.target[target].text});
		
	}
	
	componentWillMount(){
		let movieID = this.props.movieID;
		this.setState({movieID: movieID});
		
	}
		

		render(){
	
	//the page will load an existing url, because it doesnt check the other page
	//but it will not load from the previous page because then it DOES check for the query

		
		let self = this;
		
	let activeShowings = this.state.showingInfo.map(function(showingDetails, showingIndex ) {
		if (showingDetails.cinemaID == self.state.cinemaID && showingDetails.movieID == self.state.movieID){
			let bookingURL = "Booking";
				  	
		return <button type="button" className="btn btn-info" key={showingIndex}><Link to={{ pathname: bookingURL, query: { cName: self.state.selection , showingId:showingDetails._id }}}>{showingDetails.showingTime}</Link> </button> ;
		}return;
    });
	
		let activeCinemas = this.state.cinemaInfo.map(function(cinemaDetails, cinemaIndex ) {		
		return <option key={cinemaIndex} value={cinemaIndex}>{cinemaDetails.location}</option>;

    });
	
	
		
		return(
		<div>
			<select value={this.state.cinemaID} onChange={this.updateCinemaSelect.bind(this)}>
				<option value="-1">Select a Cinema</option>
				{activeCinemas}
			</select>
			<div>Cinema Selected: {this.state.cinemaID}<br/>{activeShowings}</div>
			
		</div>
		);
		
	}
	
}

Showings.defaultProps = {
		movieID: '1'
		
	}