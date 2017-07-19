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