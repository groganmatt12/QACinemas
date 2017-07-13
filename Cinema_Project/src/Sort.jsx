import React from 'react';


export default class Sort extends React.Component{
	constructor(props){
		super(props);
		this.handleMovieSearchChange = this.handleMovieSearchChange.bind(this);
	}
	
	handleMovieSearchChange(){
		this.props.onUserSearchInput(this.filterTextInput.value);
	}
	
    render(){
        return(
            <div className="sort-bar col-md-6 col-md-offset-3">

			<button type="button" className="btn btn-info btn-block" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
				<div id="demo" className="collapse">
				<div className="panel panel-default">
					<div className="panel-body">
					<form>
						<input 
							type='text'
							placeholder='search for movies'
							value={this.props.filterText}
							ref={(input) => this.filterTextInput = input}
							onChange = {this.handleMovieSearchChange}
						/>
						
					</form>
					</div>
				</div>
				</div>
			</div>
        );
    }
}