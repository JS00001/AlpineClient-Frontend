import { useDispatch, useSelector } from 'react-redux';

import setChangelogSections from '@/redux/actions/adminCreateChangelog';

const useAdminCreateChangelog = (): [ChangelogSection[], (i: ChangelogSection[]) => void] => {
	const dispatch = useDispatch();
	const changelogSections = useSelector(
		(state: { adminCreateChangelog: ChangelogSection[] }) => state.adminCreateChangelog
	);

	const updateChangelogSections = (i: ChangelogSection[]): void => {
		dispatch(setChangelogSections(i));
	};

	return [changelogSections, updateChangelogSections];
};

export default useAdminCreateChangelog;
