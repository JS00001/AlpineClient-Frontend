import { useQuery } from 'react-query';
import api from '@/api';

const useAuth = (): { isLoading: boolean; isAuth: boolean } => {
	if (typeof window === 'undefined') {
		return { isLoading: false, isAuth: false };
	}

	if (!window.localStorage.getItem('token')) {
		return { isLoading: false, isAuth: false };
	}

	const { data: user, isLoading } = useQuery('user', api.user);

	if (!user) {
		return { isLoading, isAuth: false };
	}

	return { isLoading, isAuth: true };
};

export default useAuth;
