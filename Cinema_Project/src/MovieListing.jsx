import React from 'react';
import {Link} from 'react-router';


export default class MovieListing extends React.Component {
    constructor(props){
		super(props);

	}
	
    	//{this.state.image}
    render() {
		
		let imgLink="images/"+this.props.img;
		let filmUrl = this.props.target + "/" + this.props.id;
	
        return(
            <div className="row">		
					<div className="col-sm-4" id="imgName1">
					
						<div id="movName">
							{this.props.name}
						</div>

						<div id="movImage">
							<img src={imgLink} alt={this.props.name} className="imgStyle" />
						</div>
							
						<div className="bookButton">
							<button><Link to={filmUrl}>BOOK</Link></button>
						</div>
							
					</div>
						
					<div className="col-sm-8" id="movDesc1">
						{this.props.desc}
					</div>
			</div>
        );
    }
}