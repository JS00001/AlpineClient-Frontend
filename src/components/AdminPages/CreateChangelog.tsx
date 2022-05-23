import type { TagProps } from '@/components/Tag/Tag';

import React from 'react';
import { useMutation } from 'react-query';
import { IoIosClose } from 'react-icons/io';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Tag from '@/components/Tag';
import api from '@/api';

const createChangelog: React.FC = () => {
	const [error, setError] = React.useState<string | null>(null);
	const [image, setImage] = React.useState<string | null>(null);
	const [versionInput, setVersionInput] = React.useState<string>('');
	const [tags, setTags] = React.useState<{ item: string; tag: TagProps['type'] }[]>([]);

	const imageInput = React.useRef<HTMLInputElement>(null);

	const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length) {
			setImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	const addTag = (item: string, tag: TagProps['type']) => {
		setTags([...tags, { item, tag }]);
	};

	const removeTag = (index: number) => {
		setTags(tags.filter((_, i) => i !== index));
	};

	const mutation = useMutation(api.addChangelog, {
		onSuccess: () => {
			setTags([]);
			setVersionInput('');
			window.location.reload();
		},
	});

	const onSubmit = async () => {
		if (!versionInput) {
			setError('Please enter a version number.');
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
		mutation.mutate({ title: versionInput, image: 'test', added, removed, changed });
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
					<img src={image} className='h-full w-full' />
				</div>
			)}
			<input
				value={versionInput}
				placeholder='Version'
				onChange={(e) => setVersionInput(e.target.value)}
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
