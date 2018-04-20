import {combineReducers} from 'redux';
import {allLists, userLists, sample} from './reducers';

const rootReducer = combineReducers({
    allLists,
    userLists,
    sample
})

export default rootReducer;