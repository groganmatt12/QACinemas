import React from 'react';
import CinemaStore from './store/CinemaStore';
export default class QuickBookBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cinemas: CinemaStore.getAllCinemas(),
            films: CinemaStore.getAllMovies()
        }
    }
    
    render(){
        
		let cinemaList = this.state.cinemas.map(function(cinemaDetails, cinemaIndex ) {		
		    return <option key={cinemaIndex} value={cinemaIndex}>{cinemaDetails.location}</option>;
        });
        
        let filmList = this.state.films.map(function(filmDetails, filmIndex) {
            return <option key={filmIndex} value={filmIndex}>{filmDetails.name}</option>;
        });
        
        return(
            
                <div className="navbar navbar-default navbar-fixed-bottom" id="quick_book_bar">
                    <div className="quick_book_bar_container">
                         <span>
                            <div id="qbb_header">Quick book Bar: </div>
                            <select>
                                <option>Choose a cinema...</option>
                                {cinemaList}
                            </select>

                            <select>
                                <option>Choose a film...</option>
                                    {filmList}
                            </select>

                            <select>
                                <option className="time_search_list">Choose a time...</option>
                                <option className="time_search_list">12:04am</option>
                                <option className="time_search_list">16:28am</option>
                                <option className="time_search_list">18:24am</option>
                            </select>
                        </span>
                    </div>
                </div>

        );
    }

}
