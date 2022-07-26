import Container from '../Shared/Container';

const Hero: React.FC = () => {
	return (
		<Container className='my-32 text-center md:text-left'>
			<h1 className='text-[64px] font-extrabold text-white md:text-[96px] lg:text-[128px]'>
				Changelog
			</h1>
			<h2 className='mt-5 uppercase text-gray-300 md:text-[18px] lg:text-[24px]'>
				View the Recent Changes to Alpine
			</h2>
		</Container>
	);
};

export default Hero;
