import React from 'react';
import {Link} from 'react-router';



export default class MovieListing extends React.Component {
   
	
    render() {
		
		let imgLink="images/"+this.props.img;

		let filmUrl = "MovieDetails/" + this.props.id;

        return(

            <div className="row MovieListing_Row">
					<div className="col-sm-4 MovieListing_NameAndImage">
					
						<div className="MovieListing_MovieName">
							{this.props.name}
						</div>

						<div className="MovieListing_MovieImageDiv">
							<img className="MovieListing_MovieImage" src={imgLink} alt={this.props.name}  />
						</div>
														
					</div>
					
					<div className="MovieListing_BookingButton">
						<button><Link to={filmUrl}>BOOK</Link></button>
					</div>
						
					<div className="col-sm-8 MovieListing_MovieDescription">
						{this.props.desc}
					</div>

			</div>
        );
    }
}