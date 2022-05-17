import type { NextPage } from 'next';
import Head from 'next/head';
import { IoIosClose } from 'react-icons/io';

import Tag from '@/components/Tag';
import MockData from '@/content/mockchangelog.json';
import Button from '@/components/Button';
import Background from '@/components/Background';
import AdminSidebar from '@/components/AdminSidebar';
import useAdminScreen from '@/hooks/useAdminScreen';
import React from 'react';
import type { TagProps } from '@/components/Tag/Tag';
import Input from '@/components/Input';

const Dashboard: NextPage = () => {
	const [adminScreen] = useAdminScreen();

	const [tags, setTags] = React.useState<{ item: string; tag: TagProps['type'] }[]>([]);

	const addTag = (item: string, tag: TagProps['type']) => {
		setTags([...tags, { item, tag }]);
	};

	const removeTag = (index: number) => {
		setTags(tags.filter((_, i) => i !== index));
	};

	return (
		<>
			<Head>
				<title>Crystal Client - Admin</title>
			</Head>

			<nav className='fixed z-[60]'>
				<AdminSidebar />
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
								{MockData[adminScreen].date}
							</h2>
							<h1 className=' my-3 text-6xl font-semibold text-white'>
								{MockData[adminScreen].title}
							</h1>
							<div className='w-[550px]'>
								<img src={MockData[adminScreen].image} className='h-full w-full' />
							</div>

							<div className='flex flex-col gap-y-4 py-10 text-2xl text-gray-300'>
								{MockData[adminScreen].added.map((item) => (
									<Tag type='success'>{item}</Tag>
								))}
								{MockData[adminScreen].removed.map((item) => (
									<Tag type='error'>{item}</Tag>
								))}
								{MockData[adminScreen].changed.map((item) => (
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
								placeholder='Items Added'
								tagType='success'
								className='my-5'
								addChangelogItem={addTag}
							/>
							<Input.Changelog
								placeholder='Items Changed'
								tagType='warning'
								className='my-5'
								addChangelogItem={addTag}
							/>
							<Input.Changelog
								placeholder='Items Removed'
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
