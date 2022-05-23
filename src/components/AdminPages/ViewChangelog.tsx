import Tag from '@/components/Tag';

export interface ViewChangelogProps {
	changelog: Changelog;
}

const ViewChangelog: React.FC<ViewChangelogProps> = ({ changelog }) => {
	return (
		<div>
			<h2 className='text-xl font-medium uppercase text-gray-300'>{changelog.date}</h2>
			<h1 className=' my-3 text-6xl font-semibold text-white'>{changelog.title}</h1>
			<div className='w-[550px]'>
				<img src={changelog.image} className='h-full w-full' />
			</div>

			<div className='flex flex-col gap-y-4 py-10 text-2xl text-gray-300'>
				{changelog.added?.map((item) => (
					<Tag type='success'>{item}</Tag>
				))}
				{changelog.removed?.map((item) => (
					<Tag type='error'>{item}</Tag>
				))}
				{changelog.changed?.map((item) => (
					<Tag type='warning'>{item}</Tag>
				))}
			</div>
		</div>
	);
};

export default ViewChangelog;
