import React from 'react';

export default class CheckboxClassification extends React.Component{

	constructor(){
		super();
		this.state = {
			isChecked: false

		};
	}

	onToggle(){		
		this.setState({isChecked: !(this.state.isChecked)});
		/*console.log(this.state.isChecked);*/
		let curCheck = !(this.state.isChecked);
		let curClassification = this.props.classification;

		this.props.handleCheckboxChange(curClassification, curCheck);
	}
	
	render(){
		return(
			<div className="checkbox">
				<label>
				{console.log("Refer check: " + this.props.currentCheckboxState)}
					<input 
						type="checkbox"
						value={this.props.classification}
						checked={this.props.currentCheckboxState}
						onChange={this.onToggle.bind(this)}
					/>
					{this.props.classification}
				</label>
			</div>

		);
	}
}