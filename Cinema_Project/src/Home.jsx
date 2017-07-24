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
			carouselMovies : []
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
		
	}
    render() {
        return(
            <div>
			    <div className="row Home-Carousel">
                    <Carousel movies = {this.state.carouselMovies} />
                </div>
				<div className="row Home-OfferRow">
					<Offers />
				</div>
                <div className="row Home-TopFilmRow">
                    <TopFilms rowNum={0}/>
					<TopFilms rowNum={1}/>
					<TopFilms rowNum={2}/>
                </div>
				
				
                <div className="row Home-QuickBookRow">
                    <QuickBookBar />
                </div>
			</div>
        );
    }
}
