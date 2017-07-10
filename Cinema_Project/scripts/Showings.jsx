import React from 'react';

export default class Showings extends React.Component{
	constructor(){
		super();
		
		
		
		
		this.state={
			movieID:"0",
			cinemaID:"-1"
		}
	}
	
	updateCinemaSelect(e) {
		this.setState({cinemaID: e.target.value});
	}
	
	

		render(){
	
	var testData =[
					 {
						"movieID" : "0",
						"cinemaID" : "0",
						"showingTime" : "13:00"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "0",
						"showingTime" : "15:00"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "0",
						"showingTime" : "17:00"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "0",
						"showingTime" : "19:00"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "0",
						"showingTime" : "13:30"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "0",
						"showingTime" : "17:30"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "0",
						"showingTime" : "21:30"
					 },
					{
						"movieID" : "2",
						"cinemaID" : "0",
						"showingTime" : "14:00"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "0",
						"showingTime" : "16:00"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "0",
						"showingTime" : "18:00"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "0",
						"showingTime" : "20:00"
					 },
					 {
					 	"movieID" : "3",
						"cinemaID" : "0",
						"showingTime" : "16:15"
					 },
					 {
					 	"movieID" : "3",
						"cinemaID" : "0",
						"showingTime" : "16:45"
					 },
					 {
					 	"movieID" : "3",
						"cinemaID" : "0",
						"showingTime" : "17:15"
					 },					 
					 {
						"movieID" : "3",
						"cinemaID" : "1",
						"showingTime" : "13:00"
					 },
					 {
						"movieID" : "3",
						"cinemaID" : "1",
						"showingTime" : "15:00"
					 },
					 {
						"movieID" : "3",
						"cinemaID" : "1",
						"showingTime" : "17:00"
					 },
					  {
						"movieID" : "3",
						"cinemaID" : "1",
						"showingTime" : "19:00"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "1",
						"showingTime" : "13:30"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "1",
						"showingTime" : "17:30"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "1",
						"showingTime" : "21:30"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "1",
						"showingTime" : "14:00"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "1",
						"showingTime" : "16:00"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "1",
						"showingTime" : "18:00"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "1",
						"showingTime" : "20:00"
					 },
					 {
					 	"movieID" : "0",
						"cinemaID" : "1",
						"showingTime" : "16:15"
					 },
					 {
					 	"movieID" : "0",
						"cinemaID" : "1",
						"showingTime" : "16:45"
					 },
					 {
					 	"movieID" : "0",
						"cinemaID" : "1",
						"showingTime" : "17:15"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "2",
						"showingTime" : "09:00"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "2",
						"showingTime" : "09:20"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "2",
						"showingTime" : "09:40"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "2",
						"showingTime" : "10:00"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "2",
						"showingTime" : "10:20"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "2",
						"showingTime" : "10:40"
					 },
					 {
						"movieID" : "3",
						"cinemaID" : "2",
						"showingTime" : "11:00"
					 },
					 {
						"movieID" : "3",
						"cinemaID" : "2",
						"showingTime" : "11:20"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "3",
						"showingTime" : "22:30"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "3",
						"showingTime" : "22:45"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "3",
						"showingTime" : "23:00"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "3",
						"showingTime" : "23:15"
					 },
					 {
						"movieID" : "3",
						"cinemaID" : "3",
						"showingTime" : "23:30"
					 }
					 ];

		
		let self = this;
	
	
	let activeShowings = testData.map(function(showingDetails, showingIndex) {

		if (showingDetails.cinemaID == self.state.cinemaID && showingDetails.movieID == self.state.movieID){
		return <span><a href={showingIndex}>{showingDetails.showingTime}</a>, </span>;
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