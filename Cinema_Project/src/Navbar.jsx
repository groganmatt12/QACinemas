import React from 'react';
import ReactDom from 'react-dom';
import {IndexLink, Link} from 'react-router';

export default class Navbar extends React.Component{
    render(){

        return(
            <nav className="navbar transparent navbar-inverse navbar-static-top" id="mainNav">
                    <div className="container">
						<div className="col-sm-10">
						
							<div className="navbar-header">
								<img className="logo" src="/images/QA_logo_blue.png"></img>	
							</div>
							<ul className="nav navbar-nav">
								
								<li><Link to="/">Home</Link></li>
								<li><Link to="/ListingGallery">Listing Gallery</Link></li>
								<li><Link to="/Classification">Classifications</Link></li>
								{/*<li><Link to="/ContactUs">Contact Us</Link></li>*/}
							</ul>
							</div>
						</div>					
				</nav>
			);
		}
	}
