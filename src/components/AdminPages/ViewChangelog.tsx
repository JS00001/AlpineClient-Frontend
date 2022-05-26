import React from 'react';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import api from '@/api';
import Button from '@/components/Button';
import ChangelogSection from '@/components/ChangelogSection';

export interface ViewChangelogProps {
	changelog: Changelog;
}

const ViewChangelog: React.FC<ViewChangelogProps> = ({ changelog }) => {
	const [error, setError] = React.useState<string | null>(null);
	const changelogDeleteMutation = useMutation(api.deleteChangelog, {
		onSuccess: () => {
			window.location.reload();
		},
		onError: (e: AxiosError) => {
			setError('Error code ' + e.response?.status);
		},
	});

	const onDelete = async () => {
		changelogDeleteMutation.mutate(changelog._id as string);
	};

	if (error) {
		return (
			<div className='my-5 w-full rounded-md bg-red-500 py-2 text-center lg:w-96'>
				<p className='text-white'>{error}</p>
			</div>
		);
	}

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
