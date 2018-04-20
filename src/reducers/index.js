import {combineReducers} from 'redux';
import {allLists, userLists} from './reducers';

const rootReducer = combineReducers({
    allLists,
    userLists
})

export default rootReducer;