import { useQuery } from 'react-query';

import api from '@/api';

const useAuth = (): { isLoading: boolean; isAuth: boolean } => {
	const { data: user, isLoading, isError } = useQuery('user', api.user);

	if (typeof window === 'undefined') {
		return { isLoading: false, isAuth: false };
	}

	if (!window.localStorage.getItem('token')) {
		return { isLoading: false, isAuth: false };
	}

	if (!user) {
		return { isLoading, isAuth: false };
	}

	if (isError) {
		return { isLoading, isAuth: false };
	}

	return { isLoading, isAuth: true };
};

export default useAuth;
