import { CgSpinnerTwo } from 'react-icons/cg';

export interface LoadingProps {
	fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ fullScreen = true }) => {
	const sizeStyle = fullScreen ? 'h-screen w-screen' : 'h-full w-full';

	return (
		<div className={'flex items-center justify-center ' + sizeStyle}>
			<CgSpinnerTwo className='animate-spin text-primary-400' size={56} />
		</div>
	);
};

export default Loading;
