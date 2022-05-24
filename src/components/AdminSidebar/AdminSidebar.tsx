import Button from '../Button';
import useAdminScreen from '@/hooks/useAdminScreen';
import { useEffect } from 'react';

export interface AdminSidebarProps {
	changelog: Changelog[];
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ changelog }) => {
	const [adminScreen, setAdminScreen] = useAdminScreen();

	const onSignOut = () => {
		window.localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<aside className='top-0 left-0 h-screen w-96 overflow-auto border-r border-secondary-400 p-10'>
			<img src='/logo-admin.png' />
			<Button size='small' className='mt-10 mb-4 w-full' color='secondary' onClick={onSignOut}>
				Signout
			</Button>
			<Button size='small' className=' mb-4 w-full' onClick={() => setAdminScreen('create')}>
				New Changelog
			</Button>
			<Button size='small' className='mb-10 w-full' onClick={() => setAdminScreen('image')}>
				Image Uploader
			</Button>

			{changelog.map((item, i) => (
				<div
					className={
						'my-5 cursor-pointer rounded-lg p-4 hover:bg-secondary-400 ' +
						(adminScreen == i && 'bg-secondary-400')
					}
					onClick={() => setAdminScreen(i)}
				>
					<h2 className='text-xl font-medium uppercase text-gray-300'>{item.date}</h2>
					<h1 className='text-4xl font-semibold text-white'>{item.title}</h1>
				</div>
			))}
		</aside>
	);
};

export default AdminSidebar;
