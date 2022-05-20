import type { TagProps } from '@/components/Tag/Tag';
import type { NextPage } from 'next';

import React from 'react';
import Head from 'next/head';
import { IoIosClose } from 'react-icons/io';

import Tag from '@/components/Tag';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Background from '@/components/Background';
import AdminSidebar from '@/components/AdminSidebar';
import useAdminScreen from '@/hooks/useAdminScreen';
import useAuth from '@/hooks/useAuth';
import Loading from '@/components/Loading';
import Redirect from '@/components/Redirect';
import useChangelogQuery from '@/hooks/useChangelogQuery';

const Dashboard: NextPage = () => {
	const [adminScreen] = useAdminScreen();
	const { isLoading: isAuthLoading, isAuth } = useAuth();
	const { isLoading: isChangelogLoading, data: changelog } = useChangelogQuery();

	const [tags, setTags] = React.useState<{ item: string; tag: TagProps['type'] }[]>([]);

	const addTag = (item: string, tag: TagProps['type']) => {
		setTags([...tags, { item, tag }]);
	};

	const removeTag = (index: number) => {
		setTags(tags.filter((_, i) => i !== index));
	};

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
					{/* Page when viewing an old changelog */}
					{adminScreen !== 'create' && (
						<div>
							<h2 className='text-xl font-medium uppercase text-gray-300'>
								{changelog[adminScreen].date}
							</h2>
							<h1 className=' my-3 text-6xl font-semibold text-white'>
								{changelog[adminScreen].title}
							</h1>
							<div className='w-[550px]'>
								<img src={changelog[adminScreen].image} className='h-full w-full' />
							</div>

							<div className='flex flex-col gap-y-4 py-10 text-2xl text-gray-300'>
								{changelog[adminScreen].added?.map((item) => (
									<Tag type='success'>{item}</Tag>
								))}
								{changelog[adminScreen].removed?.map((item) => (
									<Tag type='error'>{item}</Tag>
								))}
								{changelog[adminScreen].changed?.map((item) => (
									<Tag type='warning'>{item}</Tag>
								))}
							</div>
						</div>
					)}

					{adminScreen == 'create' && (
						<div>
							<h1 className=' my-3 text-6xl font-semibold text-white'>New Changelog</h1>
							<Button className='mt-10 block' color='secondary' size='small'>
								Select Image
							</Button>
							<input
								placeholder='Version'
								className='my-5 block w-96 rounded-md border border-secondary-300 bg-secondary-400 p-4 text-white focus:outline-none focus:ring-4 focus:ring-navy'
							/>
							<Input.Changelog
								placeholder='Items Added (Press enter after each item)'
								tagType='success'
								className='my-5'
								addChangelogItem={addTag}
							/>
							<Input.Changelog
								placeholder='Items Changed (Press enter after each item)'
								tagType='warning'
								className='my-5'
								addChangelogItem={addTag}
							/>
							<Input.Changelog
								placeholder='Items Removed (Press enter after each item)'
								tagType='error'
								className='my-5'
								addChangelogItem={addTag}
							/>

							{tags.map((tag, i) => (
								<div className='my-2 w-[600px] rounded-md border border-secondary-300'>
									<div className='flex items-center justify-between bg-secondary-400 p-2'>
										<Tag type={tag.tag}>
											<p className='text-gray-300'>{tag.item}</p>
										</Tag>
										<IoIosClose
											size={25}
											color={'white'}
											className='cursor-pointer hover:opacity-50'
											onClick={() => removeTag(i)}
										/>
									</div>
								</div>
							))}

							<Button size='small' className=' w-[600px]'>
								Post Changelog
							</Button>
						</div>
					)}
				</div>
			</main>
		</>
	);
};

export default Dashboard;
