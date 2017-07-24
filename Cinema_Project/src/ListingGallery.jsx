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
			currentSort: "MOVIE_TITLE",
			currentOrder: "ASCENDING",
			movieListings:[],
			movies: CinemaStore.getSortedMovies(),
			filterText:'',
			classifications: CinemaStore.generateClassificationList(),
			selectedClassifications: [],
			genres: Array.from(CinemaStore.getArrayOfGenres()),
			selectedGenres: []
		};
		this._onChange = this._onChange.bind(this);
		this.handleSearchInput = this.handleSearchInput.bind(this);
		this.handleClassCheck = this.handleClassCheck.bind(this);
		this.handleGenreCheck = this.handleGenreCheck.bind(this);
		this.handleSortSelection = this.handleSortSelection.bind(this);
		this.sortOrderToggle = this.sortOrderToggle.bind(this);
		
		
		
	}
	
	
	render(){

		return(
			<div className="parentContainer">

				<Sort filterText={this.state.filterText} onUserSearchInput={this.handleSearchInput} genresArray={this.state.genres} genresSelected={this.state.selectedGenres} onGenreCheckInput={this.handleGenreCheck} classificationArray={this.state.classifications} classificationsSelected={this.state.selectedClassifications} onClassificationCheckInput={this.handleClassCheck} currentSort={this.state.currentSort} currentOrder={this.state.currentOrder} onSortSelection={this.handleSortSelection}/>
				<br />

				<div className="container ListingGallery-ListOfFilms">
					<ListOfMovies movies={this.state.movies} target={this.props.target} />
				</div>
				<div>
                    <QuickBookBar />
                </div>
			</div>	
		);
	}
	
	
	
	
	
	
	
	
	handleClassCheck(selectedClassificationArray){
		this.setState({selectedClassifications: selectedClassificationArray});
		CinemaActions.filterMovies(this.state.filterText, this.state.selectedGenres, selectedClassificationArray, this.state.currentSort, this.state.currentOrder);
	}

	handleGenreCheck(selectedGenreArray){
/*		console.log(genreArray);*/		
		this.setState({selectedGenres: selectedGenreArray});
		CinemaActions.filterMovies(this.state.filterText, selectedGenreArray, this.state.selectedClassifications, this.state.currentSort, this.state.currentOrder);
	}

	handleSearchInput (filterText){
		this.setState({filterText});
		CinemaActions.filterMovies(filterText, this.state.selectedGenres, this.state.selectedClassifications, this.state.currentSort, this.state.currentOrder);
	}
	
	sortOrderToggle(){

		
		
	}
	
	handleSortSelection (sortType){
		
		console.log(sortType);
		let sortOrder = this.state.currentOrder;
			switch(sortType) {
			case "RELEASE_DATE":
				if(this.state.currentSort == "RELEASE_DATE"){
					if (sortOrder == "ASCENDING")
					{
						sortOrder = "DESCENDING";
					}else if (sortOrder == "DESCENDING")
					{
						sortOrder = "ASCENDING";
					}
				}else{
					sortOrder = "DESCENDING";
					}
				this.setState({currentSort: "RELEASE_DATE"});

			break;
			case "MOVIE_TITLE":

				if(this.state.currentSort == "MOVIE_TITLE"){
					if (sortOrder == "ASCENDING")
					{
						sortOrder = "DESCENDING";
					}else if (sortOrder == "DESCENDING")
					{
						sortOrder = "ASCENDING";
					}
				}else{
					sortOrder = "ASCENDING";
				}
				this.setState({currentSort: "MOVIE_TITLE"});
			
			break;
			default:
			break;
		}
		this.setState({currentOrder: sortOrder});
		CinemaActions.sortMovies(sortType, sortOrder);
	}
	
	componentWillMount(){
		CinemaStore.on("moviesChange", this._onChange);
		CinemaActions.sortMovies("MOVIE_TITLE", "ASCENDING");		
	}
	
	componentWillUnmount() {
		CinemaStore.removeListener("moviesChange", this._onChange);
    }
  
	_onChange() {	
		this.setState({movies: CinemaStore.getSortedMovies()});
	}
}
