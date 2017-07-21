import React from 'react';
import CinemaStore from './store/CinemaStore';

export default class Checkbox extends React.Component{

	constructor(){
		super();
		this.state = {
			isChecked: false
		};
	}

	onToggle(){

		this.setState({isChecked: !(this.state.isChecked)})
		let curLabel = this.props.label;
		let curCheck = !(this.state.isChecked);

		if(curCheck == true){
			this.props.handleCheckboxChange(curLabel, true);	
		}
		if(curCheck == false){
			this.props.handleCheckboxChange(curLabel, false);
		}

	}

	render(){
/*		console.log("b"+this.state.isChecked);*/

		return(
			<div className="checkbox">
				<label>
					<input
						type="checkbox"
						value={this.props.label}
						checked={this.state.isChecked}
						onChange={this.onToggle.bind(this)}
					/>
					{this.props.label}
				</label>
			</div>
		);
	}

}