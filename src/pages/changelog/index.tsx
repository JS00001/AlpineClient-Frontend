import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Image from '@/components/Image';
import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import Skeletons from '@/components/Skeletons';
import Background from '@/components/Background';

import useChangelogQuery from '@/hooks/useChangelogQuery';

const Changelog: NextPage = () => {
	const { isLoading, data } = useChangelogQuery();

	if (isLoading) return <Skeletons.ChangelogSkeleton />;

	return (
		<>
			<Head>
				<title>Crystal Client</title>
			</Head>

			<nav className='relative z-50'>
				<Navbar />
			</nav>

			<figure>
				<Background.LandingBackground />
			</figure>

			<main className='relative z-50'>
				<Container className='my-32 text-center md:text-left'>
					<h1 className='text-[64px] font-extrabold text-white md:text-[96px] lg:text-[128px]'>
						Changelog
					</h1>
					<h2 className='mt-5 uppercase text-gray-300 md:text-[18px] lg:text-[24px]'>
						View the Recent Changes to Alpine
					</h2>
				</Container>

				<Container className=' px-5'>
					{data.length > 0 && (
						<Link href='/changelog/0'>
							<div className='grid cursor-pointer gap-x-20 hover:opacity-80 lg:grid-cols-2 xl:grid-cols-12'>
								<div className='h-96 rounded-xl bg-secondary-400 xl:col-span-5'>
									<Image src={data[0].image} />
								</div>
								<div className='xl:col-span-7'>
									<h1 className='mt-5 text-2xl uppercase text-gray-300'>{data[0].date}</h1>
									<h1 className='my-5 text-5xl font-extrabold text-white'>{data[0].title}</h1>
									<p className='text-2xl font-medium leading-9 text-gray-300'>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industry's standard dummy text ever since the 1500s.
									</p>
								</div>
							</div>
						</Link>
					)}
				</Container>

				<Container className='grid gap-x-10 px-5 md:grid-cols-2 xl:grid-cols-3'>
					{data.map(({ date, title, image }, i) => {
						if (i === 0) return null;
						return (
							<Link href={`/changelog/${i}`}>
								<div className='cursor-pointer hover:opacity-80'>
									<div className=' my-10 h-72 rounded-xl bg-secondary-400'>
										<Image src={image} />
									</div>
									<h1 className='text-2xl uppercase text-gray-300'>{date}</h1>
									<h1 className='my-5 text-5xl font-extrabold text-white'>{title}</h1>
									<p className='text-2xl font-medium leading-9 text-gray-300'>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industry's standard dummy text ever since the 1500s.
									</p>
								</div>
							</Link>
						);
					})}
				</Container>
			</main>
		</>
	);
};

export default Changelog;
