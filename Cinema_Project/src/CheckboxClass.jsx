import React from 'react';

export default class CheckboxClass extends React.Component{
	
	constructor(){
		super();
		this.state = {
			isChecked: false
		}; 
	}
	
	onToggle(){
		this.setState({isChecked: !(this.state.isChecked)});
		let curCheck = !(this.state.isChecked);
		let curClass = this.props.classification;
		this.props.handleCheckBoxChange(curClass, curCheck);
	}
	
	render(){
		return(
			<div className="checkbox">
				<label>
					<input 
						type="checkbox"
						value={this.props.classification}
						checked={this.state.isChecked}
						onChange={this.onToggle.bind(this)}
					/>
					{this.props.classification}
				</label>
			</div>
		);
	}
	
}