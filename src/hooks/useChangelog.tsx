import api from '@/api';
import { useQuery } from 'react-query';

const useChangelog = (): { data: Changelog[]; isLoading: boolean } => {
	const { data, isLoading } = useQuery('changelogs', api.changelogs);

	return { data, isLoading };
};

export default useChangelog;
