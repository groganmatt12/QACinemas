import React from 'react';

export default class QuickBookBar extends React.Component{

    render(){
        return(
            
                <div className="navbar navbar-default navbar-fixed-bottom" id="quick_book_bar">
                    <div className="quick_book_bar_container">
                        <select className="cinema_search_list">
                            <option>Choose a cinema</option>
                            <option>Manchester</option>
                            <option>London</option>
                        </select>
                        
                        <select className="film_search_list">
                            <option>Choose a film...</option>
                            <option>Texas Chainsaw Massacre</option>
                            <option>War for the Planet of the Apes</option>
                            <option>High School Musical</option>
                        </select>
                        
                        <select>
                            <option className="time_search_list">Choose a time...</option>
                            <option className="time_search_list">12:04am</option>
                            <option className="time_search_list">16:28am</option>
                            <option className="time_search_list">18:24am</option>
                            
                        </select>
                    </div>
                </div>

        );
    }

}