import type { ISection } from '../AdminPages/CreateChangelog';

import { RiCodeSSlashLine } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkRaw from 'rehype-raw';
import React from 'react';

export interface Edit {
	section: ISection;
	removeSection: (id: number) => void;
	setSection: (section: ISection) => void;
}

const Edit: React.FC<Edit> = ({ section, removeSection, setSection }) => {
	const { id, title, color, content, editing } = section;

	const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const color = e.target.value;
		setSection({ ...section, color });
	};

	const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const title = e.target.value;
		setSection({ ...section, title });
	};

	const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const content = e.target.value;
		setSection({ ...section, content });
	};

	const onEditClick = () => {
		setSection({ ...section, editing: !editing });
	};

	return (
		<div className='mt-10 w-full rounded-md bg-secondary-400 lg:w-[700px]'>
			<div
				className='relative flex items-center justify-between rounded-t-md p-3'
				style={{ background: color }}
			>
				<IoIosClose
					size={30}
					className='cursor-pointer text-white hover:opacity-50'
					onClick={() => removeSection(id)}
				/>

				<input
					value={title}
					type='text'
					onChange={onTitleChange}
					className='cursor-pointer bg-transparent text-center text-2xl font-semibold text-white placeholder:text-white hover:opacity-50 focus:outline-none focus:placeholder:text-transparent'
					placeholder='ADDED'
				/>

				<div className='relative hover:opacity-50'>
					<input
						className='absolute opacity-0'
						type='color'
						name='color'
						onChange={onColorChange}
					/>
					<AiFillEdit size={24} className='text-white ' />
				</div>
			</div>

			<div className='p-3'>
				<div className='flex justify-end'>
					<span className='mb-3 rounded-full bg-secondary-300 p-2' onClick={onEditClick}>
						<RiCodeSSlashLine className='cursor-pointer hover:opacity-50' size={24} color='#fff' />
					</span>
				</div>
				{editing && (
					<textarea
						value={content}
						onChange={onContentChange}
						placeholder='You can edit this text with **markdown**'
						className='h-28 w-full rounded-md border border-secondary-300 bg-secondary-400 p-3 text-secondary-100 focus:outline-none focus:ring-4 focus:ring-navy'
					/>
				)}
				{!editing && (
					<ReactMarkdown
						rehypePlugins={[remarkRaw]}
						remarkPlugins={[remarkGfm]}
						className='w-full rounded-md border border-secondary-300 p-6 text-secondary-100'
					>
						{content || 'You can edit this text with **markdown**'}
					</ReactMarkdown>
				)}
			</div>
		</div>
	);
};

export default Edit;
