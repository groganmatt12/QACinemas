import React from 'react';
import showingJson from '../data/ShowingTimes.json';
import movieJson from '../data/MovieDetails.json';
import {Link} from 'react-router';

export default class Booking extends React.Component{
	constructor(props){
		super();
		
		this.state = {
			ticketQuantity: 0
		}
	}
	
	
	componentWillMount(){
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
		let url = "Confirmation/" + this.props.params.showingID + "/" + this.state.ticketQuantity;
        return(
		
			<div>
				<div className="filmName">
					<p>Film: </p>
				</div>
				
				<div>
					<p>Location: {this.props.location.query.cName}</p>
				</div>
				
				<div>
					<p>Time: </p>
				</div>
				
				<div>
					<p>Quantity&nbsp;
					<input type="text" value={this.state.ticketQuantity} className="quantity-box" disabled/>
					</p>
					<button className="btn btn-default" onClick={this.increment.bind(this)}>+1</button>
					<button className="btn btn-default" onClick={this.decrement.bind(this)}>-1</button>
				</div>
				<br></br>
				<div>

					<button
						className="btn btn-default"
						>
							
							<Link
								to={url}
								  >
									Buy
							</Link>	
						</button>

				</div>
				
				<div>
					<button
						className="btn btn-default"
						>
							cancel
						</button>
				</div>
				
			</div>
        );
    }
}

