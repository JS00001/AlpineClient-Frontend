import type { NextPage } from 'next';

import { fetchApi } from '@/api';
import Hero from '@/components/Homepage/Hero';
import Faqs from '@/components/Homepage/Faqs';
import Navbar from '@/components/Shared/Navbar';
import Features from '@/components/Homepage/Features';
import Showcase from '@/components/Homepage/Showcase';
import Background from '@/components/Shared/Background';

const Home: NextPage<HomepageFiles> = ({ windows_download_file, mac_download_file }) => {
	return (
		<>
			<Navbar />
			<Background.LandingBackground />

			<main className='relative z-50'>
				<Hero windows_download_file={windows_download_file} mac_download_file={mac_download_file} />
				<Showcase />
				<Features />
				<Faqs />
			</main>
		</>
	);
};

Home.getInitialProps = async () => {
	const res = await fetchApi('/homepage', { populate: '*' });

	const data = res.data.attributes;
	return data;
};

export default Home;
