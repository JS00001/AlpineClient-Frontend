import React from 'react';
import type { TagProps } from '../Tag/Tag';

export type ChangelogProps = {
	addChangelogItem: (item: string, tag: TagProps['type']) => void;
	tagType: TagProps['type'];
	placeholder: string;
	className?: string;
};

const Changelog: React.FC<ChangelogProps> = ({
	addChangelogItem,
	className = '',
	placeholder,
	tagType,
	...props
}) => {
	const [value, setValue] = React.useState('');

	const onTextChange = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key == 'Enter') {
			event.preventDefault();
			if (value === '') return;
			addChangelogItem(value, tagType);
			setValue('');
		}
	};

	return (
		<textarea
			value={value}
			onKeyDown={onTextChange}
			onChange={(e) => setValue(e.target.value)}
			placeholder={placeholder}
			className={
				'block w-[600px] rounded-md border border-secondary-300 bg-secondary-400 p-4 text-white focus:outline-none focus:ring-4 focus:ring-navy ' +
				className
			}
		/>
	);
};

export default Changelog;
