import React from 'react';


export default class Confirmation extends React.Component{
	 
	render(){
		return(
			<div>
				<h8>Your Booking is Confirmed</h8>
				<p>Film : {this.props.location.query.showingId}</p>
				
			</div>
		);
	}
}