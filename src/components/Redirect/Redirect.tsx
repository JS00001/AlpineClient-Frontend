import React from 'react';

export interface RedirectProps {
	href: string;
}

const Redirect: React.FC<RedirectProps> = ({ href }) => {
	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.href = href;
		}
	});

	return null;
};

export default Redirect;
