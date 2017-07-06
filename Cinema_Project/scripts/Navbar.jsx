import React from 'react';
import ReactDom from 'react-dom';
import {IndexLink, Link} from 'react-router';

export function MainNav(){
    return(
        <nav className="top-nav-center">
            <ul className="nav navbar-nav">
                <li><IndexLink className="pageLink" to="/">Home</IndexLink></li>
<li><IndexLink className="pageLink" to="/Listing_Gallery">Listing Gallery</li>
<li><IndexLink className="pageLink" to="/Booking">Booking</IndexLink></li>

            </ul>
        </nav>
    );
}

