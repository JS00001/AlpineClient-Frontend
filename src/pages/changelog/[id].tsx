import useChangelogQuery from '@/hooks/useChangelogQuery';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import Background from '@/components/Background';
import Tag from '@/components/Tag';

const Changelog: React.FC = () => {
	const router = useRouter();
	const { isLoading, data } = useChangelogQuery();

	const { id } = router.query;

	if (!router.isReady) return <Loading />;

	if (isLoading) return <Loading />;

	const { image, date, title, added, removed, changed } = data[parseInt(id as string)];

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
					<div className='mt-5 max-w-[800px]'>
						<img crossOrigin='anonymous' src={image} className='h-full w-full' />
					</div>
				</Container>

				<Container>
					<div className='flex flex-col gap-y-6 py-10 text-sm text-gray-300 md:text-2xl'>
						{added?.map((item) => (
							<Tag type='success'>{item}</Tag>
						))}
						{removed?.map((item) => (
							<Tag type='error'>{item}</Tag>
						))}
						{changed?.map((item) => (
							<Tag type='warning'>{item}</Tag>
						))}
					</div>
				</Container>
			</main>
		</>
	);
};

export default Changelog;
