import React from 'react';
import CinemaStore from './store/CinemaStore'


export default class Paypal extends React.Component{
	constructor(props){
		super(props);

		
		this.state = {
			ticketQuantity: 0
		}
	}
		
	render() {



		return(
				<div>
					<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_xclick" />
						<input type="hidden" name="business" value="cinemasqa-facilitator@gmail.com" />
						<input type="hidden" name="lc" value="GB" />
						<input type="hidden" name="item_name" value="Cinema Ticket" />
						<input type="hidden" name="amount" value={this.props.price} />
						<input type="hidden" name="currency_code" value="GBP" />
						<input type="hidden" name="button_subtype" value="services" />
						<input type="hidden" name="no_note" value="0" />
						<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
						<input type="image" src="https://www.sandbox.paypal.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" name="submit" alt="PayPal – The safer, easier way to pay online!" />
						<img alt="" src="https://www.sandbox.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
					</form>
				</div>
		);
	}
}