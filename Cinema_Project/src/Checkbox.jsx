import React from 'react';

export default class Checkbox extends React.Component{

	constructor(){
		super();



	}

	onToggle(){		
		//this.setState({isChecked: !(this.state.isChecked)});
		/*console.log(this.state.isChecked);*/
		let curCheck = !this.props.currentCheckboxStatus;
		let curValue = this.props.passedValue;

		this.props.handleCheckboxChange(curValue, curCheck);
	}
	
	render(){
		return(
			<div className="checkbox">
				<label>
				
					<input 
						type="checkbox"
						value={this.props.passedValue}
						checked={this.props.currentCheckboxStatus}
						onChange={this.onToggle.bind(this)}
					/>
					{this.props.passedValue}
				</label>
			</div>

		);
	}
}