import React from 'react';
import Carousel from './Carousel';
import Offers from './Offers';
import TopFilms from './TopFilms';
import QuickBookBar from './QuickBookBar';
import CinemaStore from './store/CinemaStore';

export default class Home extends React.Component{
	constructor(){
		super();
		this.state = {
			carouselMovies : CinemaStore.getAllCarouselMovies(),
			topFilms : CinemaStore.getMoviesByRelease()
		}
		this._dataload=this._dataload.bind(this);
		
	}
	componentWillMount(){
		CinemaStore.on('DATALOAD',this._dataload);
	}
	
	componentWillUnmount(){
		CinemaStore.removeListener('DATALOAD',this._dataload);
	}
	
	_dataload(){
		console.log("loading data");
		this.setState({carouselMovies: CinemaStore.getAllCarouselMovies()});
		this.setState({topFilms: CinemaStore.getMoviesByRelease()});
	}
	
	generateTopFilms(){
		let numOfRows = Math.floor(((this.state.topFilms.length)-1)/3);
		let arrayToReturn = [];
		for (let i=0; i<numOfRows && i<4; i++){
			arrayToReturn.push(<TopFilms key = {i} rowNum={i} movies = {this.state.topFilms}/>)
		}
		return arrayToReturn;
	}
	
    render() {
		let topFilmCalls = this.generateTopFilms();
        return(
            <div>
			    <div className="row Home-Carousel">
                    <Carousel movies = {this.state.carouselMovies} />
                </div>
				<div className="row Home-OfferRow Shadow-Box">
					<Offers movies = {this.state.topFilms}/>
				</div>
                <div className="row Home-TopFilmRow Shadow-Box">
					{topFilmCalls}
                </div>
				
                <div className="row Home-QuickBookRow">
                    <QuickBookBar />
                </div>
			</div>
        );
    }
}
