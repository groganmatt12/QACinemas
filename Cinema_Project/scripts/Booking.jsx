import React from 'react';
import showingJson from '../data/ShowingTimes.json';

export default class Booking extends React.Component{
	constructor(props){
		super();
		this.state = {
			filmID: "test",
			bookingID: "test",
			showingID: "test",
			time: "test",
			cinemaID: "test",
			quantityValue: 0
		}
	}
	
	increment = () =>{
		this.setState({quantityValue: quantityValue + 1});
	}
	
	componentWillMount(){
		let showingID = this.props.params.showingID;
		console.log(showingID);
		this.setState({showingID: showingID});
		this.setState({filmID: showingJson.showingTimes[showingID].movieID});
		this.setState({cinemaID: showingJson.showingTimes[showingID].cinemaID});
		this.setState({time: showingJson.showingTimes[showingID].showingTime});
		
	}
	
	
	
	
	
    render() {
        return(
		
			<div>
				<div className="filmName">
					<p>Film: {this.state.filmID}</p>
				</div>
				
				<div>
					<p>Location: {this.state.cinemaID}</p>
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


