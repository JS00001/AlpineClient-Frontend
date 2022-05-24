const useCopyToClipboard = () => {
	const copy = (text: string) => {
		navigator.clipboard.writeText(text);
	};

	return copy;
};

export default useCopyToClipboard;
