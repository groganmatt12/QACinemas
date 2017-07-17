import React from 'react';
import CinemaStore from './store/CinemaStore';


export default class Sort extends React.Component{
	constructor(props){
		super(props);
		this.handleMovieSearchChange = this.handleMovieSearchChange.bind(this);
        
        this.state = {
            genres: []
        }
	}
	
	handleMovieSearchChange(){
		this.props.onUserSearchInput(this.filterTextInput.value);
	}
    
    generateGenreDropdown() {
        let movArray = CinemaStore.getAllGenres();
        let genreArray = [];
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
                        <div className="checkbox">
                            <label><input type="checkbox" value=""></input></label>
                        </div>						
					</form>
					</div>
				</div>
				</div>
			</div>
        );
    }
}