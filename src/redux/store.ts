import { createStore, combineReducers } from 'redux';
import adminScreen from './reducers/adminScreen';

const reducers = combineReducers({
	adminScreen,
});

export default createStore(reducers);
