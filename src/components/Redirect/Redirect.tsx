import React from 'react';
import Router from 'next/router';

export interface RedirectProps {
	href: string;
}

const Redirect: React.FC<RedirectProps> = ({ href }) => {
	React.useEffect(() => {
		Router.push(href);
	});

	return null;
};

export default Redirect;
