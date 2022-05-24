import axios from 'axios';

const baseUrl =
	process.env.NODE_ENV == 'development'
		? 'http://localhost:3008'
		: 'https://crystalapi.cloudstackup.com';

export default {
	baseUrl,
	user: async () => {
		const res = await axios.get(`${baseUrl}/me`, {
			headers: {
				Authorization: `${window.localStorage.getItem('token')}`,
			},
		});

		return res.data;
	},
	login: async (code: string) => {
		const res = await axios.get(`${baseUrl}/auth?code=${code}`);
		window.localStorage.setItem('token', res.data.token);

		return res.data;
	},
	changelogs: async () => {
		const res = await axios.get(`${baseUrl}/changelog`);

		return res.data;
	},
	addChangelog: async (changelog: Changelog) => {
		const res = await axios.post(`${baseUrl}/changelog`, changelog, {
			headers: {
				Authorization: `${window.localStorage.getItem('token')}`,
			},
		});

		return res.data;
	},
	deleteChangelog: async (id: string) => {
		const res = await axios.delete(`${baseUrl}/changelog?id=${id}`, {
			headers: {
				Authorization: `${window.localStorage.getItem('token')}`,
			},
		});

		return res.data;
	},
	upload: async (image: File) => {
		const formData = new FormData();
		formData.append('image', image);
		const res = await axios.post(`${baseUrl}/upload`, formData, {
			headers: {
				Authorization: `${window.localStorage.getItem('token')}`,
				'Content-Type': 'multipart/form-data',
			},
		});

		return res.data;
	},
};
