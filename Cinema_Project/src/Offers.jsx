import React from 'react';

export default class Offers extends React.Component{
	
	render(){
    let offer1 = "./images/offers/broffer.jpg";
    let offer2 = "./images/offers/2001offer.jpg";

		return(


			<div className="container" id="offerParent">
				<div className="row" id="offerHeadings">
					<div className="col-sm-4" id="mostPopular">
                        <p>Most Popular</p> 
					</div>
                    <div className="col-sm-4">
                        <p>Special Deals!</p>
                    </div>
                    <div className="col-sm-4">
                        <p>Newest Release</p>
                    </div>
				</div>
				<div className="row offerRow">

					<div className="col-sm-4 offerPanels">
                        <div className="offers">
                            <img src={offer1} alt="offer1 top film" />
                            <p>Battle Royale</p>
                        </div>
					</div>
					<div className="col-sm-4 offerText">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-info"><a href="#">Kids under 10 go free!</a></li>
                            <li className="list-group-item list-group-item-info"><a href="#">Free drink with any special meal deal!</a></li>
                            <li className="list-group-item list-group-item-info"><a href="#">Wallace and Gromit merchandice in store!</a></li>
                            <li className="list-group-item list-group-item-info"><a href="#">Hello</a></li>
                        </ul>
					</div>
                	<div className="col-sm-4 offerPanels">
                        <div className="offers">
                            <img src={offer2} alt="offer1 top film" />
                            <p>2001</p>
                        </div>
					</div>

				</div>
			</div>
		
		
		);
	}
	
	
	
}
