import { fetchApi, getFileUrl, getStrapiUrl } from '@/api';

import Navbar from '@/components/Shared/Navbar';
import Container from '@/components/Shared/Container';
import Background from '@/components/Shared/Background';

import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from '@/components/Shared/Image';
import Markdown from '@/components/Shared/Markdown';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
	id: string;
}

const Changelog: NextPage<Changelog> = ({
	attributes: { title, description, thumbnail, sections },
}) => {
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { id } = ctx.params as IParams;

	const res = await fetchApi(`/changelogs/${id}`, {
		populate: '*',
	});

	const data: Changelog = res.data;

	// replace all of changelog.sections.details images with actual image urls
	data.attributes.sections.forEach((section: ChangelogSection) => {
		section.details = section.details.replace(/!\[(.*?)\]\((.*?)\)/g, (match, p1, p2) => {
			return `![${p1}](${getStrapiUrl(p2)})`;
		});
	});

	return { props: data };
};

export default Changelog;
