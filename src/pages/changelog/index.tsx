import type { NextPage } from 'next';
import Link from 'next/link';

import { fetchApi, getFileUrl } from '@/api';

import Hero from '@/components/Changelog/Hero';
import Image from '@/components/Shared/Image';
import Navbar from '@/components/Shared/Navbar';
import Container from '@/components/Shared/Container';
import Background from '@/components/Shared/Background';

const Changelog: NextPage<Changelogs> = ({ changelogs }) => {
	return (
		<>
			<Navbar />

			<Background.LandingBackground />

			<main className='relative z-50'>
				<Hero />

				<Container className=' px-5'>
					{changelogs.length > 0 && (
						<Link href='/changelog/0'>
							<div className='grid cursor-pointer gap-x-20 hover:opacity-80 lg:grid-cols-2 xl:grid-cols-12'>
								<div className='h-96 rounded-xl xl:col-span-5'>
									<Image src={getFileUrl(changelogs[0].thumbnail)} />
								</div>
								<div className='xl:col-span-7'>
									{/* <h1 className='mt-5 text-2xl uppercase text-gray-300'>{data[0].date}</h1> */}
									<h1 className='my-5 text-5xl font-extrabold text-white'>{changelogs[0].title}</h1>
									<p className='text-2xl font-medium leading-9 text-gray-300'>
										{changelogs[0].description}
									</p>
								</div>
							</div>
						</Link>
					)}
				</Container>

				<Container className='grid gap-x-10 px-5 md:grid-cols-2 xl:grid-cols-3'>
					{changelogs.map(({ title, description, thumbnail }, i) => {
						if (i === 0) return null;
						return (
							<Link href={`/changelog/${i}`}>
								<div className='cursor-pointer hover:opacity-80'>
									<div className=' my-10 h-72 rounded-xl bg-secondary-400'>
										<Image src={getFileUrl(thumbnail)} />
									</div>
									{/* <h1 className='text-2xl uppercase text-gray-300'>{date}</h1> */}
									<h1 className='my-5 text-5xl font-extrabold text-white'>{title}</h1>
									<p className='text-2xl font-medium leading-9 text-gray-300'>{description}</p>
								</div>
							</Link>
						);
					})}
				</Container>
			</main>
		</>
	);
};

Changelog.getInitialProps = async () => {
	const res = await fetchApi('/changelog', {
		populate: ['changelogs.sections', 'changelogs.thumbnail'],
	});
	const data = res.data.attributes;

	return data;
};

export default Changelog;
