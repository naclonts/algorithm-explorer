import { combineReducers } from 'redux';
import graphReducer from './graph'

export default combineReducers({
    graph: graphReducer,
})