import dispatcher from '../store/dispatcher';

export function filterMoviesBySearch(searchParameters) {
    console.log(searchParameters);
    dispatcher.dispatch({
        type: "FILTER_SEARCH",
        searchParameters,
    });
}