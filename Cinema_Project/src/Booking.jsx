import React from 'react';
import CinemaStore from './store/CinemaStore';
import Paypal from './Paypal';

export default class Booking extends React.Component{
	constructor(props){
		super(props);

		
		this.state = {
			ticketQuantity: 0,
			showingChoice: CinemaStore.getShowingByIndex(this.props.params.showingID)
		}
	}
	
	componentWillMount(){
		console.log(this.state.showingChoice);
	}
	
	increment(){
		if(this.state.ticketQuantity < 10)
			this.setState({ticketQuantity: this.state.ticketQuantity + 1});
	}
	
	
	decrement(){
		if(this.state.ticketQuantity > 0)
			this.setState({ticketQuantity: this.state.ticketQuantity - 1});
	}
	
    render() {
		
		let price = 10 * this.state.ticketQuantity;
		
        return(
		
			<div className="Shadow-Box Booking-Group">
				<div className="Booking-Film-Name">
					<p>
						Film: {CinemaStore.getMovieByIndex(this.state.showingChoice.movieID).name}
					</p>
				</div>
				
				<div>
					<p ref="Booking_LocationParagraph">
						Location: {this.props.location.query.cName}
					</p>
				</div>
				
				<div>
					<p>
						Time: {this.state.showingChoice.showingTime}
					</p>
				</div>
				
				<div>
					<p>
						Quantity&nbsp;
						<input type="text" value={this.state.ticketQuantity} className="Booking-Quantity-box" disabled/>
					</p>
					<button className="Standard-Button btn btn-default" onClick={this.increment.bind(this)}>+1</button>
					<button className="Standard-Button btn btn-default" onClick={this.decrement.bind(this)}>-1</button>
				</div>
				<br></br>
				
				<Paypal price={price}/>
				
			</div>
        );
    }
}

