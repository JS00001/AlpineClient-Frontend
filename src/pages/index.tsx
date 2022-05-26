import type { NextPage } from 'next';
import Head from 'next/head';

import Content from '@/content';
import Faq from '@/components/Faq';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Feature from '@/components/Feature';
import Showcase from '@/components/Showcase';
import Container from '@/components/Container';
import Background from '@/components/Background';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Alpine Client</title>
			</Head>

			<nav className='relative z-50'>
				<Navbar />
			</nav>

			<figure>
				<Background.LandingBackground />
			</figure>

			<main className='relative z-50'>
				{/* Hero */}
				<Container className='my-32 flex flex-col items-center'>
					<h1 className='text-[96px] font-extrabold text-white md:text-[164px] lg:text-[212px]'>
						Alpine
					</h1>
					<h2 className='text-center uppercase text-gray-300 md:text-[18px] lg:text-[24px]'>
						From the Original Developers of Crystal Client
					</h2>
					<div className='mt-10 flex gap-x-3'>
						<Button className='md:w-[250px]'>Windows</Button>
						<Button className='md:w-[250px]' color='secondary'>
							MacOS
						</Button>
					</div>
				</Container>

				{/* Showcase */}
				<Container>
					<Showcase />
				</Container>

				{/* Features */}
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

				{/* Faqs */}
				<Container className=' my-72 flex flex-col items-center'>
					<Container.Title>Faqs</Container.Title>

					<Container.Description>Frequently Asked Questions</Container.Description>

					<Container.Content>
						{Content.Faqs.map((faq, index) => (
							<Faq key={index} {...faq} />
						))}
					</Container.Content>
				</Container>
			</main>
		</>
	);
};

export default Home;
