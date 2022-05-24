import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

import Button from '@/components/Button';
import useAdminScreen from '@/hooks/useAdminScreen';

export interface AdminSidebarProps {
	changelog: Changelog[];
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ changelog }) => {
	const [collapsed, setCollapsed] = React.useState(true);
	const [adminScreen, setAdminScreen] = useAdminScreen();

	const onSignOut = () => {
		window.localStorage.removeItem('token');
		window.location.reload();
	};

	const onToggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	const onItemClick = (callback: () => void) => {
		callback();
		if (!collapsed) onToggleCollapsed();
	};

	return (
		<aside className='top-0 left-0 max-h-[500px] overflow-auto border-b border-secondary-400 pb-5 lg:h-screen lg:max-h-full lg:w-96 lg:border-b-0 lg:border-r'>
			<div className='px-10 pt-10 lg:pb-10'>
				<div className='flex items-center justify-between'>
					<img src='/logo-admin.png' />
					<HiMenuAlt3
						className='cursor-pointer lg:hidden'
						color='white'
						size={32}
						onClick={onToggleCollapsed}
					/>
				</div>
				<div className={`${collapsed && 'hidden'} flex-col lg:flex`}>
					<Button
						size='small'
						className='mt-10 mb-4 w-full'
						color='secondary'
						onClick={() => onItemClick(onSignOut)}
					>
						Signout
					</Button>
					<Button
						size='small'
						className=' mb-4 w-full'
						onClick={() => onItemClick(() => setAdminScreen('create'))}
					>
						New Changelog
					</Button>
					<Button
						size='small'
						className='mb-10 w-full'
						onClick={() => onItemClick(() => setAdminScreen('image'))}
					>
						Image Uploader
					</Button>
				</div>
			</div>

			<hr className='hidden border-secondary-400 lg:flex' />

			<div className={`${collapsed && 'hidden'} px-10 lg:flex lg:flex-col lg:p-10`}>
				<h2 className='my-3 hidden text-base uppercase text-gray-300 lg:flex'>
					Previous Changelogs
				</h2>
				{changelog.map((item, i) => (
					<div
						className={
							'mb-5 cursor-pointer rounded-lg p-4 hover:bg-secondary-400 ' +
							(adminScreen == i && 'bg-secondary-400')
						}
						onClick={() => onItemClick(() => setAdminScreen(i))}
					>
						<h2 className='text-xl font-medium uppercase text-gray-300'>{item.date}</h2>
						<h1 className='text-4xl font-semibold text-white'>{item.title}</h1>
					</div>
				))}
			</div>
		</aside>
	);
};

export default AdminSidebar;
