import type { NextPage } from 'next';

import React from 'react';
import Head from 'next/head';

import Loading from '@/components/Loading';
import Redirect from '@/components/Redirect';
import Background from '@/components/Background';
import AdminPages from '@/components/AdminPages';
import AdminSidebar from '@/components/AdminSidebar';

import useAuth from '@/hooks/useAuth';
import useAdminScreen from '@/hooks/useAdminScreen';
import useChangelogQuery from '@/hooks/useChangelogQuery';

const Dashboard: NextPage = () => {
	const [adminScreen] = useAdminScreen();
	const { isLoading: isAuthLoading, isAuth } = useAuth();
	const { isLoading: isChangelogLoading, data: changelog } = useChangelogQuery();

	if (isAuthLoading) return <Loading />;

	if (!isAuth) return <Redirect href='/admin/login' />;

	if (isChangelogLoading) return <Loading />;

	return (
		<>
			<Head>
				<title>Crystal Client - Admin</title>
			</Head>

			<nav className='relative z-[60] lg:fixed'>
				<AdminSidebar changelog={changelog} />
			</nav>

			<figure>
				<Background.AdminBackground />
			</figure>

			<main className='relative z-50'>
				<div className='px-5 pt-10 lg:ml-96 lg:px-14 lg:pt-28 '>
					{adminScreen === 'image' && <AdminPages.ImageUpload />}
					{adminScreen === 'create' && <AdminPages.CreateChangelog />}
					{typeof adminScreen === 'number' && (
						<AdminPages.ViewChangelog changelog={changelog[adminScreen]} />
					)}
				</div>
			</main>
		</>
	);
};

export default Dashboard;
