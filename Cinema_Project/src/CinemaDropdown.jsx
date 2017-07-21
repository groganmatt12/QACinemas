import React from 'react';

export default class CinemaDropdown extends React.component{
    
    constructor(){
    }
    
    render(){
        let cinemaList = this.props.cinemaList.map(function(cinemaDetails, cinemaIndex ) {		
		return(
            <option key={cinemaIndex} value={cinemaIndex}>{cinemaDetails.location}</option>
        ); 

    });   
        
    }

}