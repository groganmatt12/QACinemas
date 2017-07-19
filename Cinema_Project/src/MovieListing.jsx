import React from 'react';
import {Link} from 'react-router';
import CinemaStore from './store/CinemaStore';


export default class MovieListing extends React.Component {
   
	
    render() {
		
		let imgLink="images/"+this.props.img;

		let filmUrl = "MovieDetails";

		let classificationURL = "images/classifications/"+this.props.classification+".png";

        return(

            <div className="row MovieListing-Row">
					<div className="col-sm-4 MovieListing-NameAndImage">
					
						<div className="MovieListing-MovieName">
							{this.props.name}
						</div>

						<div className="MovieListing-MovieImageDiv">
							<img className="MovieListing-MovieImage" src={imgLink} alt={this.props.name}  />
						</div>

					</div>
					
						<div className="col-sm-8 MovieListing-MovieDescription">
							{this.props.desc}
						</div>

						<div className="MovieListing-BookingButton">
							<button className="btn btn-info"><Link to={{pathname: filmUrl, query: { filmID: this.props.id }}}>BOOK</Link></button>
							
						</div>
						
						<div>
							<img src={classificationURL} className="Classification-Img-Style" />
						</div>
					
			</div>
        );
    }
}