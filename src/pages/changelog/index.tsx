import type { NextPage } from 'next';
import Link from 'next/link';

import { fetchApi, getFileUrl } from '@/api';

import Hero from '@/components/Changelog/Hero';
import Image from '@/components/Shared/Image';
import Navbar from '@/components/Shared/Navbar';
import Container from '@/components/Shared/Container';
import Background from '@/components/Shared/Background';

const Changelog: NextPage<{ data: Changelog[] }> = ({ data }) => {
	if (!data) return <p>LOADING</p>;

	return (
		<>
			<Navbar />

			<Background.LandingBackground />

			<main className='relative z-50'>
				<Hero />

				<Container className=' px-5'>
					{data.length > 0 && (
						<Link href={`/changelog/${data[0].id}`}>
							<div className='grid cursor-pointer gap-x-20 hover:opacity-80 lg:grid-cols-2 xl:grid-cols-12'>
								<div className='h-96 rounded-xl xl:col-span-5'>
									<Image src={getFileUrl(data[0].attributes.thumbnail)} />
								</div>
								<div className='xl:col-span-7'>
									{/* <h1 className='mt-5 text-2xl uppercase text-gray-300'>{data[0].date}</h1> */}
									<h1 className='my-5 text-5xl font-extrabold text-white'>
										{data[0].attributes.title}
									</h1>
									<p className='text-2xl font-medium leading-9 text-gray-300'>
										{data[0].attributes.description}
									</p>
								</div>
							</div>
						</Link>
					)}
				</Container>

				<Container className='grid gap-x-10 px-5 md:grid-cols-2 xl:grid-cols-3'>
					{data.map(({ id, attributes: { title, description, thumbnail } }, i) => {
						if (i === 0) return null;
						return (
							<Link key={id} href={`/changelog/${id}`}>
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

export const getServerSideProps = async () => {
	const res = await fetchApi('/changelogs', {
		populate: '*',
	});
	const data = res.data;

	return {
		props: {
			data,
		},
	};
};

export default Changelog;
