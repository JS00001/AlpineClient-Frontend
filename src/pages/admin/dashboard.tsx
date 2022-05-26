import type { NextPage } from 'next';

import React from 'react';
import Head from 'next/head';

import Loading from '@/components/Loading';
import Redirect from '@/components/Redirect';
import Background from '@/components/Background';
import AdminPages from '@/components/AdminPages';
import AdminSidebar from '@/components/AdminSidebar';

import useAuth from '@/hooks/useAuth';
import useChangelog from '@/hooks/useChangelog';
import useAdminCurrentScreen from '@/hooks/useAdminCurrentScreen';

const Dashboard: NextPage = () => {
	const [currentAdminScreen] = useAdminCurrentScreen();
	const { isLoading: isAuthLoading, isAuth } = useAuth();
	const { isLoading: isChangelogLoading, data: changelog } = useChangelog();

	if (isAuthLoading) return <Loading />;

	if (!isAuth) return <Redirect href='/admin/login' />;

	if (isChangelogLoading) return <Loading />;

	return (
		<>
			<Head>
				<title>Alpine Client - Admin</title>
			</Head>

			<nav className='relative z-[60] lg:fixed'>
				<AdminSidebar changelog={changelog} />
			</nav>

			<figure>
				<Background.AdminBackground />
			</figure>

			<main className='relative z-50'>
				<div className='px-5 pt-10 lg:ml-96 lg:px-14 lg:pt-28 '>
					{currentAdminScreen === 'image' && <AdminPages.ImageUpload />}
					{currentAdminScreen === 'create' && <AdminPages.CreateChangelog />}
					{currentAdminScreen === 'staging' && <AdminPages.Staging />}
					{typeof currentAdminScreen === 'number' && (
						<AdminPages.ViewChangelog changelog={changelog[currentAdminScreen]} />
					)}
				</div>
			</main>
		</>
	);
};

export default Dashboard;
