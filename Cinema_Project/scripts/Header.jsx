//Version 1.0
import React from 'react';

export default class Header extends React.Component{
    render(){
        return(
            <div className="static-nav">
                <!--can use title function rather than h1-->
                <h1>QA CINEMA BLUE</h1>    
                <NavBar /> 
            </div>
        );
    }

}
