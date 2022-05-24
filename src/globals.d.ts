interface Changelog {
	_id?: string;
	date?: string;
	title: string;
	image: string;
	added?: string[];
	removed?: string[];
	changed?: string[];
}
