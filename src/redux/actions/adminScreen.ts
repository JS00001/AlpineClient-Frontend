import type { AdminScreenState, AdminScreenAction } from '../reducers/adminScreen';

export const SET_ADMIN_SCREEN = 'SET_ADMIN_SCREEN';

const setAdminScreen = (screen: AdminScreenState): AdminScreenAction => ({
	type: SET_ADMIN_SCREEN,
	payload: screen,
});

export default setAdminScreen;
