import React from 'react';
import Link from 'next/link';
import { RiMenuFill } from 'react-icons/ri';

import Content from '@/content';

const Navbar: React.FC = () => {
	const [collapsed, setCollapsed] = React.useState(true);

	const onToggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<nav className='relative z-50'>
			<div className='container mx-auto py-8 px-2 md:px-5 lg:px-20'>
				<div className='flex flex-col md:flex-row md:items-center md:justify-between'>
					<div className='flex items-center justify-between px-6'>
						<div className='w-20'>
							<Link href='/'>
								<img src='/logo.png' className='cursor-pointer' />
							</Link>
						</div>
						<RiMenuFill color='#fff' size={32} className='md:hidden' onClick={onToggleCollapsed} />
					</div>
					<div className={`mt-5 flex flex-col ${collapsed && 'hidden'} md:flex md:flex-row `}>
						{Content.NavItems.map((item, index) => {
							return <NavItem key={index} {...item} />;
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};

interface NavItemProps {
	text: string;
	url: string;
}
const NavItem: React.FC<NavItemProps> = ({ text, url }) => {
	return (
		<Link href={url}>
			<div className='cursor-pointer rounded-full px-6 py-3 hover:bg-secondary-300'>
				<p className='text-xl uppercase text-white'>{text}</p>
			</div>
		</Link>
	);
};

export default Navbar;
