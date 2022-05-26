import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export interface MarkdownProps {
	children: string;
}

const Markdown: React.FC<MarkdownProps> = ({ children }) => {
	return (
		<ReactMarkdown
			rehypePlugins={[rehypeRaw]}
			remarkPlugins={[remarkGfm]}
			components={{
				h1: (props: any) => <h1 {...props} className='text-3xl font-bold' />,
				h2: (props: any) => <h2 {...props} className='text-2xl font-semibold' />,
				h3: (props: any) => <h3 {...props} className='text-xl font-medium' />,
				h4: (props: any) => <h4 {...props} className='text-lg font-normal' />,
			}}
			className='w-full p-6 text-secondary-100'
		>
			{children}
		</ReactMarkdown>
	);
};

export default Markdown;
