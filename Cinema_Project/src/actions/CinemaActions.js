import dispatcher from '../store/dispatcher';

export function filterMoviesBySearch(searchParameters) {
    
    dispatcher.dispatch({
        type: "FILTER_SEARCH",
        searchParameters,
    });
}

export function filterMoviesByGenre(genreArray){
	dispatcher.dispatch({
		type: "GENRE_SEARCH",
		genreArray,
	});
}

export function filterMoviesByClassification(classificationArray){
	dispatcher.dispatch({
		type: "CLASS_SEARCH",
		classificationArray,
	});
}

export function filterMovies(searchParameters, genreArray, classificationArray, sortType, sortOrder){
	let parameterArray = [searchParameters, genreArray, classificationArray, sortType, sortOrder];
		dispatcher.dispatch({
			type: "MOVIE_SEARCH",
			parameterArray,
		});
}

export function sortMovies(sortType, sortOrder) {
    
    dispatcher.dispatch({
        type: "SORT_MOVIES",
        sortType, sortOrder,
    });
}