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
            <div className="sort-bar">
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
        );
    }
}