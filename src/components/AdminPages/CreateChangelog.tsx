import type { TagProps } from '@/components/Tag/Tag';

import React from 'react';
import { useMutation } from 'react-query';
import { IoIosClose } from 'react-icons/io';

import useImageUpload from '@/hooks/useImageUpload';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Tag from '@/components/Tag';
import api from '@/api';

const createChangelog: React.FC = () => {
	const [error, setError] = React.useState<string | null>(null);

	// Image uploading mutation, state, and ref
	const [image, onImageChange] = useImageUpload();
	const imageInput = React.useRef<HTMLInputElement>(null);

	// Tag adding, removing, and state
	const [tags, setTags] = React.useState<{ item: string; tag: TagProps['type'] }[]>([]);

	const addTag = (item: string, tag: TagProps['type']) => {
		setTags([...tags, { item, tag }]);
	};

	const removeTag = (index: number) => {
		setTags(tags.filter((_, i) => i !== index));
	};

	// Changelog creation inputs, mutation, and submission
	const [titleInput, setTitleInput] = React.useState<string>('');

	const changelogCreateMutation = useMutation(api.addChangelog, {
		onSuccess: () => {
			setTags([]);
			setTitleInput('');
			window.location.reload();
		},
		onError: () => {
			window.location.reload();
		},
	});

	const onSubmit = () => {
		if (!image) {
			setError('Please add an image.');
			return;
		}

		if (!titleInput) {
			setError('Please enter a title.');
			return;
		}

		if (!tags.length) {
			setError('Please add at least one tag.');
			return;
		}

		setError(null);
		let added = tags.filter(({ tag }) => tag === 'success').map(({ item }) => item);
		let removed = tags.filter(({ tag }) => tag === 'error').map(({ item }) => item);
		let changed = tags.filter(({ tag }) => tag === 'warning').map(({ item }) => item);
		changelogCreateMutation.mutate({ title: titleInput, image, added, removed, changed });
	};

	return (
		<div>
			<h1 className=' my-3 text-6xl font-semibold text-white'>New Changelog</h1>
			<input
				type='file'
				name='image'
				ref={imageInput}
				className='hidden'
				accept='image/*'
				onChange={onImageChange}
			/>
			<Button
				className='mt-10 block'
				color='secondary'
				size='small'
				onClick={() => imageInput.current?.click()}
			>
				Select Image
			</Button>
			{error && (
				<div className='my-5 w-96 rounded-md bg-red-500 py-2 text-center'>
					<p className='text-white'>{error}</p>
				</div>
			)}
			{image && (
				<div className='mt-5 max-w-[500px]'>
					<img crossOrigin='anonymous' src={image} className='h-full w-full' />
				</div>
			)}
			<input
				value={titleInput}
				placeholder='Title'
				onChange={(e) => setTitleInput(e.target.value)}
				className='my-5 block w-96 rounded-md border border-secondary-300 bg-secondary-400 p-4 text-white focus:outline-none focus:ring-4 focus:ring-navy'
			/>
			<Input.Changelog
				placeholder='Items Added (Press enter after each item)'
				tagType='success'
				className='my-5'
				addChangelogItem={addTag}
			/>
			<Input.Changelog
				placeholder='Items Changed (Press enter after each item)'
				tagType='warning'
				className='my-5'
				addChangelogItem={addTag}
			/>
			<Input.Changelog
				placeholder='Items Removed (Press enter after each item)'
				tagType='error'
				className='my-5'
				addChangelogItem={addTag}
			/>

			{tags.map((tag, i) => (
				<div className='my-2 w-[600px] rounded-md border border-secondary-300'>
					<div className='flex items-center justify-between bg-secondary-400 p-2'>
						<Tag type={tag.tag}>
							<p className='text-gray-300'>{tag.item}</p>
						</Tag>
						<IoIosClose
							size={25}
							color={'white'}
							className='cursor-pointer hover:opacity-50'
							onClick={() => removeTag(i)}
						/>
					</div>
				</div>
			))}

			<Button size='small' className='mb-10 w-[600px]' onClick={onSubmit}>
				Post Changelog
			</Button>
		</div>
	);
};

export default createChangelog;
