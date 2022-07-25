interface File {
	data: {
		id: number;
		attributes: {
			name: string;
			alternativeText: string;
			caption: string;
			ext: string;
			size: number;
			url: string;
			createdAt: string;
			updatedAt: string;
		};
	};
}

interface ChangelogSection {
	title: string;
	details: string;
}

interface Changelog {
	title: string;
	description: string;
	thumbnail: File;
	sections: ChangelogSection[];
}

interface Changelogs {
	changelogs: Changelog[];
}

interface HomepageFiles {
	windows_download_file: File;
	mac_download_file: File;
}
