import { useMutation } from 'react-query';

import api from '@/api';
import Button from '@/components/Button';
import ChangelogSection from '../ChangelogSection';

export interface ViewChangelogProps {
	changelog: Changelog;
}

const ViewChangelog: React.FC<ViewChangelogProps> = ({ changelog }) => {
	const changelogDeleteMutation = useMutation(api.deleteChangelog, {
		onSuccess: () => {
			window.location.reload();
		},
		onError: () => {
			window.location.reload();
		},
	});

	const onDelete = async () => {
		changelogDeleteMutation.mutate(changelog._id as string);
	};

	return (
		<div>
			<h2 className='text-xl font-medium uppercase text-gray-300'>{changelog.date}</h2>
			<h1 className=' my-3 text-6xl font-semibold text-white'>{changelog.title}</h1>

			{changelog.sections.map((section, i) => (
				<ChangelogSection.View section={section} key={i} />
			))}

			<Button color='error' className='my-10' onClick={onDelete}>
				Delete Changelog
			</Button>
		</div>
	);
};

export default ViewChangelog;
