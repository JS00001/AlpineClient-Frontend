import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import api from '@/api';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import Loading from '@/components/Loading';
import Redirect from '@/components/Redirect';
import Background from '@/components/Background';
import Container from '@/components/Container';

const LoginPage: NextPage = () => {
	const router = useRouter();
	const { code, errorMessage } = router.query;

	if (!router.isReady) return <Loading />;

	const { data, error } = useQuery('login', () => api.login(code as string), {
		retry: false,
		enabled: !!code,
	});

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
						<div className='flex w-full flex-col items-center rounded-lg bg-secondary-400 py-10 px-5 md:w-10/12 md:py-16 lg:w-3/5 xl:w-1/2'>
							{errorMessage && (
								<div className='mb-5 w-3/4 rounded-md bg-red-500 py-2 text-center'>
									<p className='text-white'>{errorMessage}</p>
								</div>
							)}
							<h1 className='text-4xl font-semibold text-white lg:text-6xl'>Alpine Admin</h1>
							<Link href='https://crystalapi.cloudstackup.com/login'>
								<Button className='mt-10'>Login with Discord</Button>
							</Link>
						</div>
					</Container>
				</main>
			</>
		);

	if (error) return <Redirect href='/admin/login?errorMessage=Unauthorized+User' />;

	if (data) return <Redirect href='/admin/dashboard' />;

	return <Loading />;
};

export default LoginPage;
