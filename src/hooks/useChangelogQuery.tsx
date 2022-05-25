import api from '@/api';
import { useQuery } from 'react-query';

const useChangelogQuery = (): { data: ChangelogV2[]; isLoading: boolean } => {
	const { data, isLoading } = useQuery('changelogs', api.changelogs);

	return { data, isLoading };
};

export default useChangelogQuery;
