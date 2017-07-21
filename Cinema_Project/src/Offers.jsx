import React from 'react';
import CinemaStore from './store/CinemaStore';
import {Link} from 'react-router';

export default class Offers extends React.Component{

    constructor(){
        super();
        this.state = {
            newestRelease: "",
            newestReleaseName: "",
			newestId:''
        };
    }


    componentWillMount(){
		
        let newest = CinemaStore.getMoviesByRelease()[0].image;
        let newestName = CinemaStore.getMoviesByRelease()[0].name;
		let newId =  CinemaStore.getMoviesByRelease()[0].id;
        this.setState({newestRelease: newest});
        this.setState({newestReleaseName: newestName});
		this.setState({newestId: newId});
    }



    render(){
        let offer1 = "./images/offers/broffer.jpg";
        let offer2 = "./images/offers/2001offer.jpg";

        let newestPath = "./images/"+this.state.newestRelease;
		let path = "MovieDetails/" + this.state.newestId;
		
        return(

            <div className="Container Offer-Parent">

                <div className="row Offer-Headings">
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
                            <Link to = {path} >
								<img src={newestPath} alt="offer1 top film" />
								<p>{this.state.newestReleaseName}</p>
							</Link>

                        </div>
                    </div>	
                </div>
            </div>
        );
    }
}
