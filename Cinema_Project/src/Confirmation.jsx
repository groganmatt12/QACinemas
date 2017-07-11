import React from 'react';
import BookingInfo from './data/BookingInfo.json';


export default class Confirmation extends React.Component{
	
	componentWillMount(){
		let BookingArray = BookingInfo.bookingInfo;
		let test = this.props.params.showingID
		BookingArray.push({"showingID" : this.props.params.showingID,"ticketQuantity" : this.props.params.quantity});
		
	}
	
	render(){
		return(
			<div>
				<h8>Your Booking is Confirmed</h8>
				<p>You have booked {this.props.params.quantity} tickets to showing {this.props.params.showingID}</p>
				
			</div>
		);
	}
}