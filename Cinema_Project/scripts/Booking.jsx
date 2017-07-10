import React from 'react';
import showingJson from '../data/ShowingTimes.json';

export default class Booking extends React.Component{
	constructor(props){
		super();
		this.state = {
			filmID: "test",
			bookingID: "test",
			showingID: "test"
		}
	}
	
	componentWillMount(){
		let showingID = 5;//this.props.params.showingID;
		console.log(showingID);
		this.setState({showingID: showingID});
		this.setState({filmID: showingJson.showingTimes[showingID].movieID});
		
	}
	
	
	
	
	
    render() {
        return(
		
			<div>
				<div className="filmName">
					<p>Film: {this.state.filmID}</p>
				</div>
				
				<div>
					<p>Location: </p>
				</div>
				
				<div>
					<p>Time: </p>
				</div>
				
				<div>
					<p>Quantity&nbsp;
					<input type="text" value="3" className="quantity-box" disabled="disabled"/>
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



