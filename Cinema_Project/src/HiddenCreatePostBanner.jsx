import React from 'react';

export default class HiddenCreatePostBanner extends React.Component{
	constructor(){
		super();


	}
	
	render(){
		return(
			<form className="HCP">
				<div className="form-group">
					<label htmlFor="HCP-title">Post Title:</label>
					<input type="text" className="form-control" id="HCP-title" />
				</div>
				<div className="form-group">
					<label htmlFor="HCP-nPost">Content:</label>
					<input type="text" className="form-control" id="HCP-nPost" />
				</div>
				 <input type="submit" value="Submit" />				
			</form>
		);
	}
}