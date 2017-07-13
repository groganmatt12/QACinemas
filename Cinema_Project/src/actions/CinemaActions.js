import dispatcher from '../store/dispatcher';

export function filterMoviesBySearch(searchParameters) {
    
    dispatcher.dispatch({
        type: "FILTER_SEARCH",
        searchParameters,
    });
}