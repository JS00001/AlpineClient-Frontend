import axios from 'axios';

const baseUrl = 'https://crystalapi.cloudstackup.com';

export default {
	user: async () => {
		const res = await axios.get('https://crystalapi.cloudstackup.com/me', {
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
};
