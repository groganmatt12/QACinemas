import React from 'react';
import CinemaStore from './store/CinemaStore';


export default class Sort extends React.Component{
	constructor(props){
		super(props);
		this.handleMovieSearchChange = this.handleMovieSearchChange.bind(this);
        
        this.state = {
            genres: [],
            genre_objects: []
        }
	}
	
	handleMovieSearchChange(){
		this.props.onUserSearchInput(this.filterTextInput.value);
	}
    
    
    generateCheckboxes() {
        let genreList = this.state.genres;
        for(let i = 0; i < genreList.length; i++){
            this.state.genre_objects.push(<div className="checkbox"><label><input type="checkbox" value="">{genreList[i]}</input></label></div>)
        }
    }
    
    componentWillMount() {
        let genreList = CinemaStore.getGenreList();
        console.log(genreList);
        this.setState({ genres: genreList});
        this.generateCheckboxes();
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
                        <div>
                            {this.state.genre_objects}
                        </div>
					</form>
					</div>
				</div>
				</div>
			</div>
        );
    }
}