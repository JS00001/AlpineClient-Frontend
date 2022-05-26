import type { currentAdminScreenState } from '@/redux/reducers/currentAdminScreen';

import { useDispatch, useSelector } from 'react-redux';

import setcurrentAdminScreen from '@/redux/actions/currentAdminScreen';

const useAdminCurrentScreen = (): [
	currentAdminScreenState,
	(i: currentAdminScreenState) => void
] => {
	const dispatch = useDispatch();
	const currentAdminScreen = useSelector(
		(state: { currentAdminScreen: currentAdminScreenState }) => state.currentAdminScreen
	);

	const updatecurrentAdminScreen = (i: currentAdminScreenState): void => {
		dispatch(setcurrentAdminScreen(i));
	};

	return [currentAdminScreen, updatecurrentAdminScreen];
};

export default useAdminCurrentScreen;
