import { CgSpinnerTwo } from 'react-icons/cg';

const Loading: React.FC = () => {
	return (
		<div className='flex h-screen w-screen items-center justify-center'>
			<CgSpinnerTwo className='animate-spin text-primary-400' size={56} />
		</div>
	);
};

export default Loading;
