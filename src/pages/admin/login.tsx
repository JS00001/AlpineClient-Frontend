import type { NextPage } from 'next';

import Router, { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import api from '@/api';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';
import Container from '@/components/Container';
import Loading from '@/components/Loading';

const LoginPage: NextPage = () => {
	const router = useRouter();
	const { code } = router.query;

	if (!router.isReady) return <Loading />;

	if (!code)
		return (
			<>
				<Head>
					<title>Crystal Client - Admin</title>
				</Head>

				<nav className='relative z-50'>
					<Navbar />
				</nav>

				<figure>
					<Background.LoginBackground />
				</figure>

				<main className='relative z-50'>
					<Container className='mt-32 flex justify-center'>
						<div className='flex w-full flex-col items-center rounded-lg bg-secondary-400 py-16 md:w-10/12 lg:w-3/5 xl:w-1/2'>
							<h1 className='text-4xl font-semibold text-white lg:text-6xl'>Alpine Admin</h1>
							<Link href='https://crystalapi.cloudstackup.com/login'>
								<Button className='my-10'>Login with Discord</Button>
							</Link>
						</div>
					</Container>
				</main>
			</>
		);

	const { data, error } = useQuery('login', () => api.login(code as string));

	useEffect(() => {
		if (data) {
			Router.push('/admin/dashboard');
		}
	});

	if (error) return <div>{JSON.stringify(error)}</div>;

	return <Loading />;
};

export default LoginPage;
