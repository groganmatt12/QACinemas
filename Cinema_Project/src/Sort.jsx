import React from 'react';
import CinemaStore from './store/CinemaStore';


export default class Sort extends React.Component{
	constructor(props){
		super(props);
		this.handleMovieSearchChange = this.handleMovieSearchChange.bind(this);
        
        this.state = {
            genres: CinemaStore.getGenreList(),
            genre_objects: []
        }
	}
	
	handleMovieSearchChange(){
		this.props.onUserSearchInput(this.filterTextInput.value);
        this.generateCheckboxes();
	}
    
    
    generateCheckboxes() {
        let genreList = this.state.genres;
        let displayArray = [];
        for(let i = 0; i < genreList.length; i++){
            displayArray.push(<div className="checkbox"><label><input type="checkbox" value="">{genreList[i]}</input></label></div>);
            console.log(genreList);
        }
        this.setState({ genre_objects: displayArray });
        console.log(displayArray);
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