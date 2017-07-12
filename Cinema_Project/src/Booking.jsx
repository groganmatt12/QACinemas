import React from 'react';
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



					<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_xclick" />
						<input type="hidden" name="business" value="cinemasqa-facilitator@gmail.com" />
						<input type="hidden" name="lc" value="GB" />
						<input type="hidden" name="item_name" value="Cinema Ticket" />
						<input type="hidden" name="amount" value="12.34" />
						<input type="hidden" name="currency_code" value="GBP" />
						<input type="hidden" name="button_subtype" value="services" />
						<input type="hidden" name="no_note" value="0" />
						<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
						<input type="image" src="https://www.sandbox.paypal.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
						<img alt="" border="0" src="https://www.sandbox.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
					</form>

				</div>
				
			</div>
        );
    }
}
/*
amount=1
item_name="Ticket"
item_number=0
quantity=3
display=1
*/

