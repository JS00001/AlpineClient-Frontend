import { SET_ADMIN_SCREEN } from '../actions/currentAdminScreen';

export type currentAdminScreenState = number | 'create' | 'image' | 'staging';

export interface currentAdminScreenAction {
	type: typeof SET_ADMIN_SCREEN;
	payload: currentAdminScreenState;
}

const initialState: currentAdminScreenState = 'create';

const currentAdminScreenReducer = (
	state = initialState,
	action: currentAdminScreenAction
): currentAdminScreenState => {
	switch (action.type) {
		case SET_ADMIN_SCREEN:
			return action.payload;
		default:
			return state;
	}
};

export default currentAdminScreenReducer;
