import React from 'react';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

import Container from '../Shared/Container';
import Content from '@/content';

export interface FaqProps {
	question: string;
	answer: string;
}

const Faqs: React.FC = () => {
	return (
		<Container className=' my-72 flex flex-col items-center'>
			<Container.Title>Faqs</Container.Title>

			<Container.Description>Frequently Asked Questions</Container.Description>

			<Container.Content>
				{Content.Faqs.map((faq, index) => (
					<Faq key={index} {...faq} />
				))}
			</Container.Content>
		</Container>
	);
};

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
	const [expanded, setExpanded] = React.useState(false);

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	return (
		<div className='my-4 rounded-2xl  bg-secondary-400 px-10 py-6'>
			<div className='flex cursor-pointer items-center justify-between' onClick={toggleExpanded}>
				<h2 className='text-xl text-white md:text-2xl lg:text-3xl'>{question}</h2>
				{expanded && <RiSubtractLine color='white' size={32} />}
				{!expanded && <RiAddLine color='white' size={32} />}
			</div>

			{expanded && (
				<div className='py-4'>
					<p className='text-white'>{answer}</p>
				</div>
			)}
		</div>
	);
};

export default Faqs;
