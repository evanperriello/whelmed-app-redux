import {combineReducers} from 'redux';
import {allLists, userLists, toggleShow} from './reducers';

const rootReducer = combineReducers({
    allLists,
    userLists,
    toggleShow
})

export default rootReducer;