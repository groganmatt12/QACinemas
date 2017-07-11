import React from 'react';
import showingJson from '../data/ShowingTimes.json';
import movieJson from '../data/MovieDetails.json';


export default class Booking extends React.Component{
	constructor(props){
		super();
		this.state = {
			filmID: "test filmID",
			filmTitle: "test filmTitle",
			bookingID: "test bookingID",
			showingID: "test showingID",
			time: "test time",
			cinemaID: "test cinemaID",
			quantityValue: 0
		}
	}
	
	
	componentWillMount(){
		let test  = this.props.location.query.cName;
		console.log(test);
		let movieArr = movieJson.movieDetails;
		
		
		console.log("film ID = " + this.state.filmID);
		
		for(let i = 0; i < movieArr.length; i++){
			console.log(this.state.filmID);
            if(i == this.state.filmID){
				console.log(this.state.filmID);
                this.setState({filmTitle: movieArr[i].name});
			}
		}
	}
		
    render() {
        return(
		
			<div>
				<div className="filmName">
					<p>Film: {this.state.filmTitle}</p>
				</div>
				
				<div>
					<p>Location: {this.props.location.query.cName}</p>
				</div>
				
				<div>
					<p>Time: {this.state.time}</p>
				</div>
				
				<div>
					<p>Quantity&nbsp;
					<input type="text" value={this.state.quantityValue} className="quantity-box" disabled/>
					<button onClick={increment}>+1</button>
					</p>
				</div>
				<div>
					<button
						className="btn btn-default"
						>
							Buy
						</button>
				</div>
				
				<div>
					<button
						className="btn btn-default"
						>
							cancel
						</button>
				</div>
				
			</div>
        );
    }
}

const increment = () =>{
	this.setState({quantityValue: quantityValue + 1});
}
