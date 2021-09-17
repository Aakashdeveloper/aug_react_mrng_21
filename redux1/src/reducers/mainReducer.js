import {combineReducers} from 'redux';
import films from './movieReducers';

const rootReducer = combineReducers({
    films
})

export default rootReducer;
