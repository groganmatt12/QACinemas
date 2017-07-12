import React from 'react';
import ReactDom from 'react-dom';
import {IndexLink, Link} from 'react-router';

export default class Navbar extends React.Component{
    render(){

        return(
            <nav className="navbar transparent navbar-inverse navbar-static-top" id="mainNav">
                <div className="container-fluid">
                    <div className="container">
						<div className="col-sm-10">
							<ul className="nav navbar-nav">
								<li><Link to="/">Home</Link></li>
								<li><Link to="/ListingGallery">Listing Gallery</Link></li>
								<li><Link to="/Booking">Booking</Link></li>          
								<li><Link to="/Showings/1">Show times prototype</Link></li>
							</ul>
							</div>
						</div>					
					</div>
				</nav>
			);
		}
	}

