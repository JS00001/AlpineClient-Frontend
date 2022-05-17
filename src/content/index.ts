import * as Ri from 'react-icons/ri';
import type { IconType } from 'react-icons/lib/cjs';

interface IContent {
	NavItems: {
		url: string;
		text: string;
	}[];
	Showcase: {
		title: string;
		image: string;
	}[];
	Features: {
		icon: IconType;
		description: string;
	}[];
	Faqs: {
		question: string;
		answer: string;
	}[];
}

const Content: IContent = {
	NavItems: [
		{
			url: '/#download',
			text: 'Download',
		},
		{
			url: '/',
			text: 'Store',
		},
		{
			url: '/changelog',
			text: 'Changelog',
		},
		{
			url: 'https://discord.gg/crystalclient',
			text: 'Discord',
		},
	],
	// Up to FOUR showcase items, else will break
	Showcase: [
		{
			title: 'Pvp',
			image: '/Image.png',
		},
		{
			title: 'Factions',
			image: '/Image-1.png',
		},
		{
			title: 'Cannoning',
			image: '/Image-2.png',
		},

		{
			title: 'Cosmetics',
			image: '/Image-3.png',
		},
	],
	Features: [
		{
			icon: Ri.RiSoundModuleLine,
			description: 'Over 100 Mods',
		},
		{
			icon: Ri.RiAppsLine,
			description: 'Custom HUD',
		},
		{
			icon: Ri.RiGroupLine,
			description: 'Groups and Friends',
		},
		{
			icon: Ri.RiFoldersLine,
			description: 'Mod Profiles',
		},
	],
	Faqs: [
		{
			question: 'What is Modding?',
			answer:
				'Modding is the process of creating and modifying mods for the game. Modding is a very fun and fun way to learn how to code. It is also a great way to learn how to make your own mods.',
		},
		{
			question: 'How do I make a mod?',
			answer:
				'You can make a mod by following the steps below.1. Create a new GitHub repository.2. Create a new branch in the repository.3. Create a new file in the repository.4. Write your code in the file.5. Push your code to the repository.6. Create a new mod on the Mod Portal.7. Upload your mod to the Mod Portal.',
		},
	],
};

export default Content;
