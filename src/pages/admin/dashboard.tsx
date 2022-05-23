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

			<nav className='fixed z-[60]'>
				<AdminSidebar changelog={changelog} />
			</nav>

			<figure>
				<Background.AdminBackground />
			</figure>

			<main className='relative z-50'>
				<div className='ml-96 px-14 pt-28 '>
					{adminScreen !== 'create' && (
						<AdminPages.ViewChangelog changelog={changelog[adminScreen]} />
					)}
					{adminScreen == 'create' && <AdminPages.CreateChangelog />}
				</div>
			</main>
		</>
	);
};

export default Dashboard;
