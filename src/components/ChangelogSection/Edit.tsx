import { RiCodeSSlashLine, RiBookLine } from 'react-icons/ri';
import { IoIosClose, IoIosArrowUp, IoIosArrowDown, IoMdBrush } from 'react-icons/io';
import React from 'react';

import Markdown from '@/components/Markdown';

export interface Edit {
	section: ChangelogSection;
	removeSection: (id: number) => void;
	setSection: (section: ChangelogSection) => void;
	moveSection: (id: number, direction: 'up' | 'down') => void;
}

const Edit: React.FC<Edit> = ({ section, removeSection, setSection, moveSection }) => {
	const { id, title, color, content, editing } = section;
	const colorInput = React.useRef<HTMLInputElement>(null);

	const onColorClick = () => {
		colorInput.current?.click();
	};

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

	const onRemoveClick = () => {
		removeSection(id as number);
	};

	const onMoveClick = (direction: 'up' | 'down') => {
		moveSection(id as number, direction);
	};

	return (
		<div className='mb-8 w-full rounded-md bg-secondary-400 lg:w-[700px]'>
			<div
				className='relative flex items-center justify-between rounded-t-md p-4'
				style={{ background: color }}
			>
				<input
					value={title}
					type='text'
					onChange={onTitleChange}
					className='cursor-pointer bg-transparent text-2xl font-medium text-white placeholder:text-white hover:opacity-50 focus:outline-none focus:placeholder:text-transparent'
					placeholder='ADDED'
				/>

				<div className='relative z-10 flex items-center gap-x-5'>
					<RiCodeSSlashLine
						className='cursor-pointer text-white hover:opacity-50'
						size={24}
						onClick={onEditClick}
					/>

					<IoIosArrowUp
						size={24}
						className='cursor-pointer text-white hover:opacity-50'
						onClick={() => onMoveClick('up')}
					/>

					<IoIosArrowDown
						size={24}
						className='cursor-pointer text-white hover:opacity-50'
						onClick={() => onMoveClick('down')}
					/>
					<input
						className='absolute right-0 z-0 opacity-0'
						type='color'
						name='color'
						ref={colorInput}
						onChange={onColorChange}
					/>

					<IoMdBrush
						size={20}
						className=' z-10 cursor-pointer text-white hover:opacity-50'
						onClick={onColorClick}
					/>

					<IoIosClose
						size={35}
						className='z-10 cursor-pointer text-white hover:opacity-50'
						onClick={onRemoveClick}
					/>
				</div>
			</div>

			<div className='p-5'>
				{editing && (
					<textarea
						value={content}
						onChange={onContentChange}
						placeholder='You can edit this text with **markdown**'
						className='h-40 w-full rounded-md border border-secondary-300 bg-secondary-400 p-3 text-secondary-100 focus:outline-none focus:ring-4 focus:ring-navy'
					/>
				)}
				{!editing && <Markdown>{content || 'You can edit this text with **markdown**'}</Markdown>}
			</div>
		</div>
	);
};

export default Edit;
