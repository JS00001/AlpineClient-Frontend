import React from 'react';

const colorStyles = {
	primary: 'bg-primary-400 rounded-md text-white cursor-pointer hover:bg-primary-300',
	secondary:
		'text-center bg-secondary-400 rounded-md text-white cursor-pointer hover:bg-secondary-300',
	error: 'bg-red-500 rounded-md text-white cursor-pointer hover:bg-red-400',
};

const sizeStyles = {
	small: 'py-4 px-5 sm:px-14 text-base',
	large: 'py-5 px-10 sm:px-20 text-lg font-medium ',
};

const disabledStyles = {
	primary:
		'cursor-not-allowed rounded-md text-primary-100 border-2 border-primary-100 bg-primary-200',
	secondary:
		'cursor-not-allowed rounded-md text-secondary-100 border-2 border-secondary-100 bg-secondary-200',
	error: 'cursor-not-allowed rounded-md text-red-100 border-2 border-red-100 bg-red-200',
};

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	color?: keyof typeof colorStyles;
	size?: keyof typeof sizeStyles;
	disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
	color = 'primary',
	size = 'large',
	className = '',
	disabled = false,
	children,
	...props
}) => {
	const colorStyle = disabled ? disabledStyles[color] : colorStyles[color];

	const sizeStyle = sizeStyles[size];

	return (
		<button disabled={disabled} className={`${colorStyle} ${sizeStyle} ${className} `} {...props}>
			{children}
		</button>
	);
};

export default Button;
