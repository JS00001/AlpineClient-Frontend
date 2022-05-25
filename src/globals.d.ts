interface Changelog {
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
