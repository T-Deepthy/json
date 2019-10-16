import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import jsonReducer from './jsonReducer';
import apiReducer from './apiReducer';
import sampleApiReducer from './sampleApiReducer'

export default (history) => combineReducers({
	'router': connectRouter(history),
	jsonReducer,
	apiReducer,
	sampleApiReducer
});

