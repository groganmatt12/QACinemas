import React from 'react';
import CinemaStore from './store/CinemaStore';

export default class Checkbox extends React.Component{

	contructor(){
		this.state = {
			isChecked: false,
			genreArray: []
		};
	}

	onToggle(){
		console.log(this.props.label);
		let curCheck = this.state.isChecked;
		this.setState({isChecked: !curCheck});

		let testSet = new Set([]);
		if(curCheck == true){
			this.props.handleCheckboxChange(this.props.label);
		
		}
		if(curCheck != true){
			
		}
	}

	componentWillMount(){
		this.setState({isChecked: false});
	}


	render(){
		const isChecked  = this.state.isChecked;
		console.log("?"+isChecked);
		return(
			<div className="checkbox">
				<label>
					<input
						type="checkbox"
						value={this.props.label}
						checked={isChecked}
						onChange={this.onToggle.bind(this)}
					/>
					{this.props.label}
				</label>
			</div>
		);
	}

}