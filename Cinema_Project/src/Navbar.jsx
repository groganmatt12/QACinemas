import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component{
    render(){

        return(

            <nav className="navbar-inverse navbar-static-top Navbar">
                    <div className="container">
						<div className="col-sm-10">
							<div className="navbar-header Nav-Logo">
								<Link to="/"><img className="Nav-Logo-Img" alt="QA Cinemas Logo" src="/images/QA_logo_blue.png" /></Link>	
							</div>
							<ul className="nav navbar-nav Nav-List">
							
								<li>
									<Link to="/">
										Home
									</Link>
								</li>
								
								<li>
									<Link to="/ListingGallery">
										Listing Gallery
									</Link>
								</li>
								
								<li>
									<Link to="/Classification">
										Classifications
									</Link>
								</li>
								<li>
									<Link to="/Forum">
										Forum
									</Link>
								</li>
								
								{/*<li><Link to="/ContactUs">Contact Us</Link></li>*/}
							</ul>
						</div>
					</div>					
				</nav>
			);
		}
	}

