import React from 'react';
import CinemaStore from './store/CinemaStore';
import Sort from './Sort';
import * as CinemaActions from './actions/CinemaActions';
import ListOfMovies from './ListOfMovies';
import QuickBookBar from './QuickBookBar';

export default class ListingGallery extends React.Component{
	constructor(props){
		super(props);
		this.state={
			movieListings:[],
			movies: CinemaStore.getAllMovies(),
			filterText:''
		};
		this._onChange = this._onChange.bind(this);
		this.handleSearchInput = this.handleSearchInput.bind(this);
		
	}
	
	
	render(){
		
		return(
			<div className="parentContainer">
				<Sort filterText={this.state.filterText} onUserSearchInput={this.handleSearchInput} onGenreCheckInput={this.handleGenreCheck}/>
				<br />

				<div className="container ListOfMovies">
					<ListOfMovies movies={this.state.movies} target={this.props.target} />
				</div>
				<div>
                    <QuickBookBar />
                </div>
			</div>	
		);
		
	}
	
	handleGenreCheck(genreArray){
/*		console.log(genreArray);
*/		CinemaActions.filterMoviesByGenre(genreArray);
	}

	handleSearchInput (filterText){
		this.setState({filterText});
		CinemaActions.filterMoviesBySearch(filterText);
	}
	
	componentWillMount(){
		CinemaStore.on("moviesChange", this._onChange);		
	}
	
	componentWillUnmount() {
		CinemaStore.removeListener("moviesChange", this._onChange);
    }
  
	_onChange() {	
		this.setState({movies: CinemaStore.getFilteredMovies()});
	}
	
	
}
