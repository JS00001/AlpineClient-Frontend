interface Changelog {
	_id?: string;
	date?: string;
	title: string;
	sections: Section[];
}

interface ChangelogSection {
	id?: number;
	editing?: boolean;
	title: string;
	color: string;
	content: string;
}
