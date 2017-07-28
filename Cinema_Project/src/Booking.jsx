import React from 'react';
import CinemaStore from './store/CinemaStore';
import Paypal from './Paypal';
import {Link} from 'react-router'; 

export default class Booking extends React.Component{
	constructor(props){
		super(props);

		
		this.state = {
			ticketQuantity: 0,

			showingChoice: CinemaStore.getShowingByIndex(this.props.location.query.showingId),
			showingInfo: CinemaStore.getAllShowings(),
			bookingMade: false
		

		}
		this.bookToDb = this.bookToDb.bind(this);
		this.showTicketBooked = this.showTicketBooked.bind(this);
		this.returnToHome = this.returnToHome.bind(this);
		
		this._dataload = this._dataload.bind(this);

	}
	
	componentWillMount(){
		console.log(this.state.showingChoice);
		CinemaStore.on('DATALOAD',this._dataload);
	}
	
		componentWillUnmount() {
		CinemaStore.removeListener('DATALOAD',this._dataload);
    }
	
	_dataload(){
		console.log("loading data");
		this.setState({showingChoice: CinemaStore.getShowingByIndex(this.props.location.query.showingId)});
		this.setState({showingInfo: CinemaStore.getAllShowings()});
	}
	
	increment(){
		if(this.state.ticketQuantity < 10)
			this.setState({ticketQuantity: this.state.ticketQuantity + 1});
	}
	
	
	decrement(){
		if(this.state.ticketQuantity > 0)
			this.setState({ticketQuantity: this.state.ticketQuantity - 1});
	}
	
	bookToDb(){
		let showingId = this.props.location.query.showingId;
		let quantity = this.state.ticketQuantity;
        //POST to api. 
        fetch("/api/bookings",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                showingId: showingId,
                quantity: quantity,
            })
        }).then( (res) => {
            console.log("Req success a: ", res);
			console.log(JSON.stringify({
                showingId: showingId,
                quantity: quantity,
            }));
			ticketInc
			document.getElementById("bookNowButton").disabled = true;
			document.getElementById("ticketInc").disabled = true;
			document.getElementById("ticketDec").disabled = true;
			this.setState({bookingMade: true});
           
        });
	}
	
	showTicketBooked(){
		let output = [];
		if(this.state.bookingMade){
			output.push(<div><h2>Your booking has been made!</h2><br /> <button className="Standard-Button btn btn-default" onClick={this.returnToHome} id="backToHomeButton">Return to Homepage</button> </div>);
		}
		return output;
	}
	returnToHome(){
		this.props.router.push('/');
	}
	
    render() {
		
		let price = 10 * this.state.ticketQuantity;
		console.log(this.props.location.query);
		let shownIfBooked = this.showTicketBooked();
        return(
		
		
			
			<div className="Shadow-Box Booking-Group">
				<div className="Booking-Test">
					<div className="Booking-Film-Name">
						<p>Film: {CinemaStore.getMovieByIndex(this.state.showingChoice.movieID).name}</p>
					</div>
					
					<div>
						<p>Location: {this.props.location.query.cName}</p>
					</div>
					
					<div>
						<p>Time: {this.state.showingChoice.showingTime}</p>
					</div>
					
					<div>
						<p>Quantity&nbsp;
						<input type="text" value={this.state.ticketQuantity} className="Booking-Quantity-box" disabled/>
						</p>
						<button className="Standard-Button btn btn-default" onClick={this.increment.bind(this)} id="ticketInc">+1</button>
						<button className="Standard-Button btn btn-default" onClick={this.decrement.bind(this)} id="ticketDec">-1</button>
					</div>
					<br></br>
						<Link to ="/Confirmation" >
							<button className="Standard-Button btn btn-default" onClick={this.bookToDb} id="bookNowButton">BOOK NOW</button>
						</Link>
					</div>
					<br />
					{shownIfBooked}
			</div>
        );
    }
}

