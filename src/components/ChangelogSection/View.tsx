import Markdown from '@/components/Markdown';

export interface ViewProps {
	section: ChangelogSection;
}

const View: React.FC<ViewProps> = ({ section }) => {
	const { title, color, content } = section;

	return (
		<div className='mt-10 w-full rounded-md border border-secondary-300 bg-main lg:w-[900px]'>
			<div
				style={{
					background: color,
				}}
				className='relative flex items-center justify-center rounded-t-md p-4'
			>
				<h1 className=' text-center text-2xl font-medium text-white'>{title}</h1>
			</div>

			<div className='p-6'>
				<Markdown>{content}</Markdown>
			</div>
		</div>
	);
};
export default View;
