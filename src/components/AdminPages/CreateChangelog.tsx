import React from 'react';
import { useMutation } from 'react-query';

import api from '@/api';
import Button from '@/components/Button';
import ChangelogSection from '@/components/ChangelogSection';

export interface ISection {
	id: number;
	title: string;
	color: string;
	content: string;
	editing: boolean;
}

const CreateChangelog: React.FC = () => {
	const defaultSection = {
		id: 0,
		editing: true,
		title: 'Added',
		color: '#22c55e',
		content: '',
	};

	const [title, setTitle] = React.useState<string>('');
	const [error, setError] = React.useState<string | null>(null);
	const [sections, setSections] = React.useState<ISection[]>([defaultSection]);

	const addChangelogMutation = useMutation(api.addChangelog, {
		onSuccess: () => {
			window.location.reload();
		},
		onError: () => {
			window.location.reload();
		},
	});

	const setSection = (section: ISection) => {
		const newSections = sections.map((s) => {
			if (s.id === section.id) {
				return section;
			}
			return s;
		});
		setSections(newSections);
	};

	const addSection = () => {
		const newSection = {
			...defaultSection,
			id: sections.length,
		};
		setSections([...sections, newSection]);
	};

	const removeSection = (id: number) => {
		const newSections = sections.filter((s) => s.id !== id);
		setSections(newSections);
	};

	const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const title = e.target.value;
		setTitle(title);
	};

	const onSubmit = () => {
		if (!title.length) {
			setError('Title is required');
			return;
		}

		if (!sections.length) {
			setError('At least one section is required');
			return;
		}

		setError(null);
		addChangelogMutation.mutate({
			title,
			sections,
		});
	};

	return (
		<div>
			<h1 className=' my-3 text-6xl font-semibold text-white'>Create Changelog</h1>

			{error && (
				<div className='my-5 w-full rounded-md bg-red-500 py-2 text-center lg:w-96'>
					<p className='text-white'>{error}</p>
				</div>
			)}

			<input
				value={title}
				placeholder='Title'
				onChange={onTitleChange}
				className='my-5 block w-full rounded-md border border-secondary-300 bg-secondary-400 p-4 text-white focus:outline-none focus:ring-4 focus:ring-navy lg:w-96'
			/>

			{sections.map((section, index) => (
				<ChangelogSection.Edit
					section={section}
					setSection={setSection}
					removeSection={removeSection}
					key={index}
				/>
			))}

			<Button
				className='my-5 block w-full lg:w-[700px]'
				size='small'
				color='secondary'
				onClick={addSection}
			>
				Add Section
			</Button>

			<Button className='block w-full lg:w-[700px]' size='small' color='primary' onClick={onSubmit}>
				Submit
			</Button>
		</div>
	);
};

export default CreateChangelog;
