import { useMutation } from 'react-query';

import api from '@/api';
import Tag from '@/components/Tag';
import Image from '@/components/Image';
import Button from '@/components/Button';

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
			<div className='w-[550px]'>
				<Image src={changelog.image} />
			</div>

			<div className='flex flex-col gap-y-4 py-10 text-2xl text-gray-300'>
				{changelog.added?.map((item) => (
					<Tag type='success'>{item}</Tag>
				))}
				{changelog.removed?.map((item) => (
					<Tag type='error'>{item}</Tag>
				))}
				{changelog.changed?.map((item) => (
					<Tag type='warning'>{item}</Tag>
				))}
			</div>

			<Button color='error' className='mb-10' onClick={onDelete}>
				Delete Changelog
			</Button>
		</div>
	);
};

export default ViewChangelog;
