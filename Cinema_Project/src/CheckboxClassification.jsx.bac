import React from 'react';

export default class CheckboxClassification extends React.Component{

	constructor(){
		super();



	}

	onToggle(){		
		//this.setState({isChecked: !(this.state.isChecked)});
		/*console.log(this.state.isChecked);*/
		let curCheck = !this.props.currentCheckboxStatus;
		let curClassification = this.props.classification;

		this.props.handleCheckboxChange(curClassification, curCheck);
	}
	
	render(){
		return(
			<div className="checkbox">
				<label>
				
					<input 
						type="checkbox"
						value={this.props.classification}
						checked={this.props.currentCheckboxStatus}
						onChange={this.onToggle.bind(this)}
					/>
					{this.props.classification}
				</label>
			</div>

		);
	}
}