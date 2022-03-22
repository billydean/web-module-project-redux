import { combineReducers } from 'redux';
import reducer from './favoritesReducer';
import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    movieReducer,
    favoritesReducer,
})

export default rootReducer