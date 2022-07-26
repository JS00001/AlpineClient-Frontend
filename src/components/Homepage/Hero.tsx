import { getFileUrl } from '@/api';
import Button from '../Shared/Button';
import Container from '../Shared/Container';

export interface HeroProps {
	windows_download_file: File;
	mac_download_file: File;
}

const Hero: React.FC<HeroProps> = ({ windows_download_file, mac_download_file }) => {
	const downloadWindows = () => {
		const url = getFileUrl(windows_download_file);
		window.open(url, '_blank');
	};

	const downloadMac = () => {
		const url = getFileUrl(mac_download_file);
		window.open(url, '_blank');
	};

	return (
		<Container className='my-32 flex flex-col items-center'>
			<h1 className='text-[96px] font-extrabold text-white md:text-[164px] lg:text-[212px]'>
				Alpine
			</h1>
			<h2 className='text-center uppercase text-gray-300 md:text-[18px] lg:text-[24px]'>
				From the Original Developers of Crystal Client
			</h2>
			<div className='mt-10 flex gap-x-3'>
				<Button className='md:w-[250px]' disabled onClick={downloadWindows}>
					Windows
				</Button>
				<Button className='md:w-[250px]' disabled color='secondary' onClick={downloadMac}>
					MacOS
				</Button>
			</div>
		</Container>
	);
};

export default Hero;
