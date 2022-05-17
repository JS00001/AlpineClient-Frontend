const typeStyles = {
	success: 'bg-green-900',
	warning: 'bg-yellow-800',
	error: 'bg-red-900',
	info: 'bg-blue-900',
};

const titles = {
	success: 'Added',
	warning: 'Changed',
	error: 'Removed',
	info: 'Info',
};

export interface TagProps {
	type: keyof typeof typeStyles;
}

const Tag: React.FC<TagProps> = ({ type, children, ...props }) => {
	return (
		<div className='flex items-center'>
			<div className={'mr-3 rounded-md p-1 text-base text-gray-300 ' + typeStyles[type]}>
				<p>{titles[type]}</p>
			</div>
			{children}
		</div>
	);
};

export default Tag;
