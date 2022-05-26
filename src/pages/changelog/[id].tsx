import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '@/components/Navbar';
import Loading from '@/components/Loading';
import Container from '@/components/Container';
import Background from '@/components/Background';

import useChangelog from '@/hooks/useChangelog';
import ChangelogSection from '@/components/ChangelogSection';

const Changelog: React.FC = () => {
	const router = useRouter();
	const { isLoading, data } = useChangelog();

	const { id } = router.query;

	if (!router.isReady) return <Loading />;

	if (isLoading) return <Loading />;

	const { date, title, sections } = data[parseInt(id as string)];

	return (
		<>
			<Head>
				<title>Crystal Client</title>
			</Head>

			<nav className='relative z-50'>
				<Navbar />
			</nav>

			<figure>
				<Background.LoginBackground />
			</figure>

			<main className='relative z-50'>
				<Container className='mt-32 text-center md:text-left'>
					<h2 className='mt-5 uppercase text-gray-300 md:text-[18px] lg:text-[24px]'>{date}</h2>
					<h1 className='text-[64px] font-extrabold text-white md:text-[96px] lg:text-[128px]'>
						{title}
					</h1>
				</Container>

				<Container>
					{sections.map((section, index) => (
						<ChangelogSection.View section={section} />
					))}
				</Container>
			</main>
		</>
	);
};

export default Changelog;
