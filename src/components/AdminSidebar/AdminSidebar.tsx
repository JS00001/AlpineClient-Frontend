import Button from '../Button';
import type { AdminScreenState } from '@/redux/reducers/adminScreen';
import { useDispatch, useSelector } from 'react-redux';
import MockData from '@/content/mockchangelog.json';
import setAdminScreen from '@/redux/actions/adminScreen';

const AdminSidebar: React.FC = () => {
	const dispatch = useDispatch();
	const adminScreen = useSelector((state: { adminScreen: AdminScreenState }) => state.adminScreen);
	const onClick = (i: number | 'create') => {
		dispatch(setAdminScreen(i));
	};

	return (
		<aside className='top-0 left-0 h-screen w-96 overflow-auto border-r border-secondary-400 p-10'>
			<img src='/logo-admin.png' />
			<Button size='small' className='my-10 w-full' onClick={() => onClick('create')}>
				New Changelog
			</Button>

			{MockData.map((item, i) => (
				<div
					className={
						'my-5 cursor-pointer rounded-lg p-4 hover:bg-secondary-400 ' +
						(adminScreen == i && 'bg-secondary-400')
					}
					onClick={() => onClick(i)}
				>
					<h2 className='text-xl font-medium uppercase text-gray-300'>{item.date}</h2>
					<h1 className='text-4xl font-semibold text-white'>{item.title}</h1>
				</div>
			))}
		</aside>
	);
};

export default AdminSidebar;
