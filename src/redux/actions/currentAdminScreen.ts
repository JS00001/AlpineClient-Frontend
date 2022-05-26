import type {
	currentAdminScreenState,
	currentAdminScreenAction,
} from '../reducers/currentAdminScreen';

export const SET_ADMIN_SCREEN = 'SET_ADMIN_SCREEN';

const setcurrentAdminScreen = (screen: currentAdminScreenState): currentAdminScreenAction => ({
	type: SET_ADMIN_SCREEN,
	payload: screen,
});

export default setcurrentAdminScreen;
