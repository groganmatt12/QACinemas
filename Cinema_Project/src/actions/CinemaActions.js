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

export function filterMovies(searchParameters, genreArray, classificationArray){
	let parameterArray = [searchParameters, genreArray, classificationArray];
		dispatcher.dispatch({
			type: "MOVIE_SEARCH",
			parameterArray,
		});
}