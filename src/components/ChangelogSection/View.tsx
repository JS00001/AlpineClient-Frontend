import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export interface ViewProps {
	section: ChangelogSection;
}

const View: React.FC<ViewProps> = ({ section }) => {
	const { title, color, content } = section;

	return (
		<div className='mt-10 w-full rounded-md border border-secondary-300 bg-main lg:w-[900px]'>
			<div
				className='relative flex items-center justify-center rounded-t-md p-3'
				style={{ background: color }}
			>
				<h1 className=' text-center text-2xl font-semibold text-white'>{title}</h1>
			</div>

			<div className='p-6'>
				<ReactMarkdown
					rehypePlugins={[rehypeRaw]}
					remarkPlugins={[remarkGfm]}
					className='w-full  p-3 text-secondary-100'
				>
					{content}
				</ReactMarkdown>
			</div>
		</div>
	);
};
export default View;
