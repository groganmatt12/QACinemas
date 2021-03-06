import React from 'react';
import CinemaStore from './store/CinemaStore';
export default class QuickBookBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cinemas: CinemaStore.getAllCinemas(),
            films: CinemaStore.getAllMovies(),
			showing: [],
			cinemaID: -1,
			filmID: -1,
			selectedTime: -1,
			filmSelected: 0
        }
    }
	
	
	updateCinemaSelect(e){
		let id = e.target.value;
		this.setState({cinemaID: id});
		let target = parseInt(e.target.value,10);
		target += 1;
		if(this.state.filmSelected == 1){
			this.setState({showing: CinemaStore.getShowingByCinemaAndMovie(this.state.cinemaID, id)});
		}
		
	}
	
	updateFilmSelect(e){
		let id = e.target.value;
		this.setState({filmID: id});
		this.setState({filmSelected: 1});
		let target = parseInt(e.target.value,10);
		target += 1;
		this.setState({showing: CinemaStore.getShowingByCinemaAndMovie(this.state.cinemaID, id)});
	}
    
	updateTimeSelect(e){
		let time = e.target.value;
		this.setState({selectedTime: time});
		let target = parseInt(e.target.value,10);
		target += 1;
		
		{/*If No Showings Scheduled, add logic to prevent continuing*/}
	}
	
	
    render(){
        
		let cinemaList = this.state.cinemas.map(function(cinemaDetails, cinemaIndex ) {		
		    return <option key={cinemaIndex} value={cinemaIndex}>{cinemaDetails.location}</option>;
        });
        
        let filmList = this.state.films.map(function(filmDetails, filmIndex) {
            return <option key={filmIndex} value={filmIndex}>{filmDetails.name}</option>;
        });
		
		let timeList = this.state.showing.map(function(showingetails, showingIndex) {
            return <option key={showingIndex} value={showingIndex}>{showingetails.showingTime}</option>;
        });
		
		
		

        return(
            
                <div className="navbar navbar-default navbar-fixed-bottom Quick-Book-Bar">
                    <div className="Quick-Book-Bar-Contents">
                         <span>
                            <div id="Quick-Book-Bar-Text">Quick book Bar: </div>
                            <select value={this.state.cinemaID} onChange={this.updateCinemaSelect.bind(this)}>
                                <option>Choose a cinema...</option>
									{cinemaList}	
                            </select>

                            <select value={this.state.filmID} onChange={this.updateFilmSelect.bind(this)}>
                                <option>Choose a film...</option>
                                    {filmList}
                            </select>

                            <select value={this.state.selectedTime} onChange={this.updateTimeSelect.bind(this)}>
                                <option>Choose a time...</option>
                                {timeList}
                            </select>
                        </span>
                    </div>
                </div>

        );
    }

}
