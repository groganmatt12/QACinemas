import React from 'react';
import CinemaStore from './store/CinemaStore';
import {Link} from 'react-router';
export default class QuickBookBar extends React.Component{

 render(){
	 return(
            
                <div className="Error_Page">
					<div className="Error_Page_Text">
						<h1>404!</h1>
						<h1>Page not found</h1>
						<Link to="/">Click here to return to Go</Link>
					</div>
                </div>

        );
    }

}