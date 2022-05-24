import React from 'react';
import { useMutation } from 'react-query';

import api from '@/api';
import Button from '../Button';
import useImageUpload from '@/hooks/useImageUpload';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

const ImageUpload: React.FC = () => {
	const copy = useCopyToClipboard();
	const [image, onImageChange] = useImageUpload();
	const imageInput = React.useRef<HTMLInputElement>(null);

	return (
		<div>
			<h2 className='text-xl font-medium uppercase text-gray-300'>
				Generate Hosted URL's for Images
			</h2>
			<h1 className=' my-3 text-6xl font-semibold text-white'>Image Upload</h1>
			<input
				type='file'
				name='image'
				ref={imageInput}
				className='hidden'
				accept='image/*'
				onChange={onImageChange}
			/>
			<Button color='secondary' className='mt-10' onClick={() => imageInput.current?.click()}>
				Select Image
			</Button>
			{image && (
				<div className=' max-w-[800px]'>
					<h2 className='mt-14 text-xl font-medium uppercase text-gray-300'>Click URL to Copy</h2>
					<div className='my-3 cursor-pointer rounded-md border border-secondary-300 bg-secondary-400'>
						<h2 className='p-3  text-gray-300 ' onClick={() => copy(image)}>
							{image}
						</h2>
					</div>
					<img crossOrigin='anonymous' src={image} className='h-full w-full' />
				</div>
			)}
		</div>
	);
};

export default ImageUpload;
