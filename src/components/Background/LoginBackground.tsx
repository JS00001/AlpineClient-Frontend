const LoginBackground: React.FC = () => {
	return (
		<div className='animate-shimmer hidden sm:flex'>
			<div className='hidden lg:flex'>
				<div className='absolute top-[32px] right-0 bottom-0 z-10 w-[818px] rounded-tl-[100%] bg-main'></div>
				<div className='absolute top-[30px] right-0 bottom-0 w-[820px] rounded-tl-[100%] bg-gradient-to-br from-tangerine to-strawberry opacity-20'></div>
			</div>

			<div className='hidden lg:flex'>
				<div className='absolute bottom-[232px] left-0 top-0 z-10 w-[518px] rounded-br-[75%] bg-main'></div>
				<div className='leftt-0 absolute bottom-[230px] top-0 w-[520px] rounded-br-[75%] bg-gradient-to-br from-lime to-lemon opacity-20'></div>
			</div>
		</div>
	);
};

export default LoginBackground;
