//Version 1.0
import React from 'react';
import Navbar from './Navbar'

export default class Header extends React.Component{
    render(){
        return(
            <div className="static-nav">
               
                <h1>QA CINEMA BLUE</h1>    
                <Navbar /> 
            </div>
        );
    }

}
