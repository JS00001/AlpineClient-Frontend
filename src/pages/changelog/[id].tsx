import Head from 'next/head';

import { fetchApi, getFileUrl, getStrapiUrl } from '@/api';

import Navbar from '@/components/Shared/Navbar';
import Container from '@/components/Shared/Container';
import Background from '@/components/Shared/Background';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from '@/components/Shared/Image';
import Markdown from '@/components/Shared/Markdown';

const Changelog: NextPage<Changelog> = ({ title, description, thumbnail, sections }) => {
	return (
		<>
			<Navbar />
			<Background.LoginBackground />

			<main className='relative z-50'>
				<Container className='mt-32 text-center md:text-left'>
					{/* <h2 className='mt-5 uppercase text-gray-300 md:text-[18px] lg:text-[24px]'>{date}</h2> */}
					<h1 className='text-[64px] font-extrabold text-white md:text-[96px] lg:text-[128px]'>
						{title}
					</h1>
					<h2 className='my-5 uppercase text-gray-300 md:text-[18px] lg:text-[24px]'>
						{description}
					</h2>

					<div className='w-1/2'>
						<Image src={getFileUrl(thumbnail)} />
					</div>
				</Container>

				<Container>
					{sections.map((section, index) => (
						<div key={index} className='my-16 rounded-lg bg-secondary-400 p-8'>
							<h3 className='mb-5 font-semibold uppercase text-white md:text-[20px] lg:text-[28px]'>
								{section.title}
							</h3>
							<Markdown>{section.details}</Markdown>
						</div>
					))}
				</Container>
			</main>
		</>
	);
};

Changelog.getInitialProps = async (ctx) => {
	const { id } = ctx.query;

	const res = await fetchApi('/changelog', {
		populate: ['changelogs.sections', 'changelogs.thumbnail'],
	});
	const data = res.data.attributes;

	const changelog = data.changelogs[id as string];

	// replace all of changelog.sections.details images with actual image urls
	changelog.sections.forEach((section: ChangelogSection) => {
		section.details = section.details.replace(/!\[(.*?)\]\((.*?)\)/g, (match, p1, p2) => {
			return `![${p1}](${getStrapiUrl(p2)})`;
		});
	});

	return changelog;
};

export default Changelog;
