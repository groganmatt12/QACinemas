import React from 'react';
import CinemaStore from './store/CinemaStore';
import {Link} from 'react-router';

export default class Offers extends React.Component{

    constructor(){
        super();
       
    }


 

	createNewestRelease(){
		let returnVar = [];
		if (this.props.movies.length > 0){
			let newestPath = "./images/" + this.props.movies[0].image;
			let path = "MovieDetails?filmID=" + this.props.movies[0].id;
			
			returnVar.push(
				<Link to = {path} key= "offerKey">
					<img src={newestPath} alt="offer1 top film" />
					<p>{this.props.movies[0].name}</p>
				</Link>
			)
		}
		return(returnVar);
	}

    render(){
        let offer1 = "./images/offers/broffer.jpg";
        let offer2 = "./images/offers/2001offer.jpg";

		let newestRelease = this.createNewestRelease();
		
        return(

            <div className="Container Offer-Parent col-md-12 col-sm-12">

                <div className="row Offer-Headings hidden-xs">
                    <div className="col-sm-4 Offer-Most-Popular">
                        <p>Most Popular</p> 
                    </div>
                    <div className="col-sm-4">
                        <p>Special Deals!</p>
                    </div>
                    <div className="col-sm-4">
                        <p>Newest Release</p>
                    </div>
                </div>

                <div className="row Offer-Row" id="">
                    <div className="col-sm-4 Offer-Panel">
                        <div className="Offer-Item">
                            <img src={offer1} alt="offer1 top film" />
                            <p>Battle Royale</p>
                        </div>
                    </div>

                    <div className="col-sm-4 Offer-Panel">
                        <ul className="list-group Offer-Item">{/*list-group is bootstrap*/}
                            <li className="list-group-item list-group-item-info"><a href="#">Kids under 10 go free!</a></li>
                            <li className="list-group-item list-group-item-info"><a href="#">Free drink with any special meal deal!</a></li>
                            <li className="list-group-item list-group-item-danger"><a href="#">Wallace and Gromit merchandice in store!</a></li>
                            <li className="list-group-item list-group-item-info">...<a href="#"></a></li>
                        </ul>
                    </div>

                    <div className="col-sm-4 Offer-Panel">
                        <div className="Offer-Item">
						{newestRelease}

                        </div>
                    </div>	
                </div>
            </div>
        );
    }
}
