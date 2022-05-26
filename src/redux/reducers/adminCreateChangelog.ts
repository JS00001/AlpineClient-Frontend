import { SET_CHANGELOG_SECTIONS } from '../actions/adminCreateChangelog';

export const defaultSection = {
	id: 0,
	editing: true,
	title: 'Click to Edit',
	color: '#0071F2',
	content: '',
};

export interface AdminCreateChangelogAction {
	type: typeof SET_CHANGELOG_SECTIONS;
	payload: ChangelogSection[];
}

const initialState: ChangelogSection[] = [defaultSection];

const adminCreateChangelogReducer = (
	state = initialState,
	action: AdminCreateChangelogAction
): ChangelogSection[] => {
	switch (action.type) {
		case SET_CHANGELOG_SECTIONS:
			return action.payload;
		default:
			return state;
	}
};

export default adminCreateChangelogReducer;
