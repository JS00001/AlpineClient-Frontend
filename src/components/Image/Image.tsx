import React from 'react';

export type ImageProps = React.HTMLAttributes<HTMLImageElement> & {
	src: string;
};

const Image: React.FC<ImageProps> = ({ src, className = '', ...props }) => {
	return <img src={src} className={`h-full w-full ${className} rounded-md`} {...props} />;
};

export default Image;
