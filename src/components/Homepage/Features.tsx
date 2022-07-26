import type { IconType } from 'react-icons';
import Container from '../Shared/Container';
import Content from '@/content';

export interface FeatureProps {
	icon: IconType;
	description: string;
}

const Features: React.FC = () => {
	return (
		<Container className='my-72 flex flex-col items-center '>
			<Container.Title>Features</Container.Title>

			<Container.Description>
				Alpine ships with core features{' '}
				<span className=' bg-gradient-to-r from-primary-400 to-teal-300 bg-clip-text text-transparent'>
					Free
				</span>{' '}
				and no hidden fees
			</Container.Description>

			<Container.Content>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{Content.Features.map((feature, index) => (
						<Feature key={index} {...feature} />
					))}
				</div>
			</Container.Content>
		</Container>
	);
};

const Feature: React.FC<FeatureProps> = ({ icon, description }) => {
	const Icon = icon;

	return (
		<div className='rounded-xl bg-secondary-400 px-7 pt-20 pb-7'>
			<Icon className='text-primary-400' size={40} />
			<h1 className='mt-10 text-5xl font-medium text-white'>{description}</h1>
		</div>
	);
};

export default Features;
