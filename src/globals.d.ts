interface Changelog {
	_id?: string;
	date?: string;
	title: string;
	image: string;
	added?: string[];
	removed?: string[];
	changed?: string[];
}

interface ChangelogV2 {
	_id?: string;
	date?: string;
	title: string;
	sections: Section[];
}

interface Section {
	title: string;
	color: string;
	content: string;
}
