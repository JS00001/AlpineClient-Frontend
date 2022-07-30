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
	id: number;
	attributes: {
		title: string;
		description: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		thumbnail: File;
		sections: ChangelogSection[];
	};
}

interface HomepageFiles {
	windows_download_file: File;
	mac_download_file: File;
}
