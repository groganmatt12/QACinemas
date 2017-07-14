import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component{
    render(){

        return(
            <nav className="navbar transparent navbar-inverse navbar-static-top" id="mainNav">
                    <div className="container">
						<div className="col-sm-10">
						
							<div className="navbar-header">
								<Link to="/"><img className="logo" alt="QA Cinemas Logo" src="/images/QA_logo_blue.png"></img></Link>
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

