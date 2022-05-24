import React from 'react';
import { useMutation } from 'react-query';

import api from '@/api';

const useImageUpload = () => {
	const [image, setImage] = React.useState<string | null>(null);

	const imageUploadMutation = useMutation(api.upload, {
		onSuccess: (data) => {
			setImage(data);
		},
		onError: () => {
			window.location.reload();
		},
	});

	const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length) {
			imageUploadMutation.mutate(e.target.files[0]);
		}
	};

	return [image, onImageChange] as const;
};

export default useImageUpload;
