import Container from '@/components/Container';

const ChangelogSkeleton: React.FC = () => {
	return (
		<>
			<Container className='grid gap-x-20 px-5 lg:grid-cols-2 xl:grid-cols-12'>
				<div className='animate-skeleton h-96 rounded-xl xl:col-span-5' />
				<div className='flex flex-col justify-center xl:col-span-7'>
					<div className=' animate-skeleton mt-5 h-4 w-52 rounded-md ' />
					<div className=' animate-skeleton mt-5 h-10 w-72 rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
				</div>
			</Container>

			<Container className='grid gap-x-10 px-5 md:grid-cols-2 xl:grid-cols-3'>
				<div>
					<div className=' animate-skeleton my-10 h-72 rounded-xl bg-secondary-400' />
					<div className=' animate-skeleton mt-5 h-4 w-52 rounded-md ' />
					<div className=' animate-skeleton mt-5 h-10 w-64 rounded-md lg:w-72' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
				</div>
				<div>
					<div className=' animate-skeleton my-10 h-72 rounded-xl bg-secondary-400' />
					<div className=' animate-skeleton mt-5 h-4 w-52 rounded-md ' />
					<div className=' animate-skeleton mt-5 h-10 w-64 rounded-md lg:w-72' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
				</div>
				<div>
					<div className=' animate-skeleton my-10 h-72 rounded-xl bg-secondary-400' />
					<div className=' animate-skeleton mt-5 h-4 w-52 rounded-md ' />
					<div className=' animate-skeleton mt-5 h-10 w-64 rounded-md lg:w-72' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
					<div className=' animate-skeleton mt-5 h-4 w-full rounded-md' />
				</div>
			</Container>
		</>
	);
};

export default ChangelogSkeleton;
