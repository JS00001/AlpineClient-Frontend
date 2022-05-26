import { createStore, combineReducers } from 'redux';
import adminCreateChangelog from './reducers/adminCreateChangelog';
import currentAdminScreen from './reducers/currentAdminScreen';

const reducers = combineReducers({
	currentAdminScreen,
	adminCreateChangelog,
});

export default createStore(reducers);
