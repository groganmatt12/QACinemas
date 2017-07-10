import React from 'react';
import ReactDom from 'react-dom';
import {IndexLink, Link} from 'react-router';

export default class MainNav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-inverse" id="navbar">
            <div className="container-fluid">
            <div className="container">
            <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ListingGallery">Listing Gallery</Link></li>
            <li><Link to="/Booking">Booking</Link></li>
            <li><Link to="/MovieDetails">Movie Details</Link></li>
            <li><Link to="/Showings">Show times prototype</Link></li>
            </ul>
            </div>
            </div>
            </nav>
        );
    }
}

