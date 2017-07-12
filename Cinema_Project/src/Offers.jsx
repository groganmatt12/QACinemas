import React from 'react';

export default class Offers extends React.Component{
	
	render(){
    let offer1 = "./images/offers/broffer.jpg";

		return(


			<div className="container" id="offerParent">
				<div className="row" id="offerHeadings">
					<div className="col-sm-4" id="mostPopular">
                        <p>Most Popular</p> 
					</div>
                    <div className="col-sm-4">
                        <p>Family Tickets</p>
                    </div>
                    <div className="col-sm-4">
                        <p>Newest Release</p>
                    </div>
				</div>
				<div className="row offerRow">
					<div className="col-sm-4 offerPanels">
                        <div id="offer1">
                            <img src={offer1} alt="offer1 top film" />
                            <p>Battle Royale</p>
                        </div>
					</div>
					<div className="col-sm-4">
                         
					</div>

					<div className="col-sm-4" id="offer2">
                        
					</div>
				</div>
			</div>
		
		
		);
	}
	
	
	
}
