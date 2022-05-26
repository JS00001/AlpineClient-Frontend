import type { AdminCreateChangelogAction } from '../reducers/adminCreateChangelog';

export const SET_CHANGELOG_SECTIONS = 'SET_CHANGELOG_SECTIONS';

const setChangelogSections = (sections: ChangelogSection[]): AdminCreateChangelogAction => ({
	type: SET_CHANGELOG_SECTIONS,
	payload: sections,
});

export default setChangelogSections;
