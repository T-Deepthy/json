import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import cryptoCurrencyReducer from './cryptoCurrencyReducer';


export default (history) => combineReducers({
	'router': connectRouter(history),
	cryptoCurrencyReducer
});

