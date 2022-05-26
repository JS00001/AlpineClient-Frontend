import React from 'react';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import api from '@/api';
import Button from '@/components/Button';
import ChangelogSection from '@/components/ChangelogSection';
import { defaultSection } from '@/redux/reducers/adminCreateChangelog';

import useAdminCreateChangelog from '@/hooks/useAdminCreateChangelog';

const CreateChangelog: React.FC = () => {
	const [title, setTitle] = React.useState<string>('');
	const [error, setError] = React.useState<string | null>(null);
	const [sections, setSections] = useAdminCreateChangelog();

	const addChangelogMutation = useMutation(api.addChangelog, {
		onSuccess: () => {
			window.location.reload();
		},
		onError: (e: AxiosError) => {
			setError('Error code ' + e.response?.status);
		},
	});

	const setSection = (section: ChangelogSection) => {
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

	const moveSection = (id: number, direction: 'up' | 'down') => {
		// find the current index of the section
		const currentIndex = sections.findIndex((s) => s.id === id);

		// find the index of the section to swap with
		const swapIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

		// if the swap index is out of bounds, do nothing
		if (swapIndex < 0 || swapIndex >= sections.length) {
			return;
		}

		// create a copy of the sections array
		const newSections = [...sections];

		// swap the sections
		const temp = newSections[currentIndex];
		newSections[currentIndex] = newSections[swapIndex];
		newSections[swapIndex] = temp;

		// set the new sections
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
					moveSection={moveSection}
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

			<Button
				className='mb-10 block w-full lg:w-[700px]'
				size='small'
				color='primary'
				onClick={onSubmit}
			>
				Submit
			</Button>
		</div>
	);
};

export default CreateChangelog;
