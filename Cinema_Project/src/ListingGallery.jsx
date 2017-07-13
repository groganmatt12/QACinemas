import React from 'react';
import {browserHistory} from 'react-router';
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
			<div>
				<Sort filterText={this.state.filterText} onUserSearchInput={this.handleSearchInput} />
				<br />
				<div className="container">
					<ListOfMovies movies={this.state.movies}/>
				</div>
				<div>
                    <QuickBookBar />
                </div>
			</div>	
		);
		
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
	
    this.setState({
      movies: CinemaStore.getFilteredMovies()
    });
	}
	
	pagechange(){
		browserHistory.push('/MovieDetails');
	}
}
