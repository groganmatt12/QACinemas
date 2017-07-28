import React from 'react';

export default class SortBar extends React.Component{

	constructor(){
		super();

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.props.handleddChange(e.target.value);
	}

	render(){
		return(
			<div className="Sortbar">
               <select id="sortbar-dropdown" onChange={this.handleChange} value={this.props.ddState}>
                  <option value="select">Select</option>
                  <option value="User">User [A-Z]</option>
                  <option value="Date">Date</option>
               </select>
           </div>
			);
	}
}