import { combineReducers } from 'redux';
import
    {
        ADD_MOVIES,
        ADD_TO_FAVOURITES,
        REMOVE_FROM_FAVOURITES,
        SET_SHOW_FAVOURITES,
        ADD_SEARCH_RESULT,
        ADD_MOVIE_TO_LIST
    } from '../actions'

    const initialMoviesState = {
        list: [],
        favourites: [],
        showFavourites: false,
    }
    export function movies(state = initialMoviesState, action)
{
    switch (action.type)
    {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filtered_array = state.favourites.filter(movie => movie.Title !== action.movie.Title);
            return {
                ...state,
                favourites: filtered_array
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state;

    }
}

const initialSearchState = {
    result: {},
    showSearchResults: false
};
export function search(state = initialSearchState, action)
{
    switch (action.type)
    {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults:false
            }
        default:
            return state;
    }
}



export default combineReducers({
   
    movies,
    search
})