import qs from 'qs';
import axios from 'axios';

const BASE_URL = 'https://panel.alpineclient.com';

// Take the base url, and return the url with the passed path
export const getStrapiUrl = (path: string) => `${BASE_URL}${path}`;

// Take a subdirectory and return the full url
export const getFileUrl = (file: File) => `${getStrapiUrl(file.data.attributes.url)}`;

export const fetchApi = async (path: string, urlParams: any = {}, options: any = {}) => {
	const mergedOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
		...options,
	};

	const queryString = qs.stringify(urlParams);
	const url = `${getStrapiUrl(`/api${path}`)}${queryString ? `?${queryString}` : ''}`;

	const response = await axios.get(url, mergedOptions);

	return response.data;
};
