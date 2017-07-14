import React from 'react';
import {Link} from 'react-router';
import CinemaStore from './store/CinemaStore';


export default class MovieListing extends React.Component {
   
	
    render() {
		
		let imgLink="images/"+this.props.img;

		let filmUrl = "MovieDetails/" + this.props.id;

		let classificationURL = "images/classifications/"+this.props.classification+".png";

        return(

            <div className="row" id="movieListingRow">
					<div className="col-sm-4">
						
						<div id="movName">
							{this.props.name}
						</div>

						<div className="movImage">
							<img src={imgLink} alt={this.props.name} className="imgStyle" />
						</div>
							
						<div className="bookButton">
							<button><Link to={filmUrl}>BOOK</Link></button>
						</div>

						<div>
							<img src={classificationURL} className="classificationStyle" />
						</div>
							
					</div>
					<div className="col-sm-8" id="movDesc1">
						{this.props.desc}
					</div>

			</div>
        );
    }
}