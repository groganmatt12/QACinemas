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
			selectedTime: -1
        }
    }
	
	
	updateCinemaSelect(e){
		let id = e.target.value;
		this.setState({cinemaID: id});
		let target = parseInt(e.target.value,10);
		target += 1;
		
	}
	
	updateFilmSelect(e){
		let id = e.target.value;
		this.setState({filmID: id});
		let target = parseInt(e.target.value,10);
		target += 1;
		this.setState({showing: CinemaStore.getShowingByCinemaAndMovie(this.state.cinemaID, id)});
	}
    
	updateTimeSelect(e){
		let time = e.target.value;
		this.setState({selectedTime: time});
		let target = parseInt(e.target.value,10);
		target += 1;
		this.setState({selection: e.target[target].text});
		
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
            
                <div className="navbar navbar-default navbar-fixed-bottom" id="quick_book_bar">
                    <div className="quick_book_bar_container">
                         <span>
                            <div id="qbb_header">Quick book Bar: </div>
                            <select value={this.state.cinemaID} onChange={this.updateCinemaSelect.bind(this)}>
                                <option>Choose a cinema...</option>
									{cinemaList}	
                            </select>

                            <select value={this.state.filmID} onChange={this.updateFilmSelect.bind(this)}>
                                <option>Choose a film...</option>
                                    {filmList}
                            </select>

                            <select value={this.state.selectedTime} onChange={this.updateTimeSelect.bind(this)}>
                                <option className="time_search_list">Choose a time...</option>
                                {timeList}
                            </select>
                        </span>
                    </div>
                </div>

        );
    }

}
