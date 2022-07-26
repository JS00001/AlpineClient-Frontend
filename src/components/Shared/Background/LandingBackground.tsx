const LandingBackground: React.FC = () => {
	return (
		<div className='animate-shimmer hidden sm:flex'>
			<div>
				<div className='absolute top-0 right-0 z-10 h-[254px] w-[410px] rounded-bl-[150px] bg-main ' />
				<div className='absolute top-0 right-0 h-[256px] w-[412px] rounded-bl-[150px] bg-gradient-to-br from-lime to-lemon opacity-30 ' />
			</div>

			<div>
				<div className='absolute top-[554px] right-0 z-10 h-[1024px] w-[498px] rounded-l-3xl bg-main' />
				<div className='absolute top-[552px] right-0 h-[1028px] w-[500px] rounded-l-3xl bg-gradient-to-r from-primary-400 to-fuscia opacity-30' />
			</div>

			<div className='hidden lg:flex'>
				<div className='absolute top-[452px] left-0 z-20 h-[518px] w-[518px] rounded-tr-[100%] bg-main'></div>
				<div className='absolute top-[450px] left-0 z-10 h-[520px] w-[520px] rounded-tr-[100%] bg-gradient-to-br from-tangerine to-strawberry opacity-30'></div>
			</div>

			<div>
				<div className='absolute top-[1602px] left-0 z-10 h-[546px] w-[598px] rounded-r-[90px] bg-main md:w-[698px]' />
				<div className='absolute top-[1600px] left-0  h-[550px] w-[600px] rounded-r-[90px] bg-gradient-to-br from-lime to-lemon opacity-30 md:w-[700px]' />
			</div>

			<div>
				<div className='absolute top-[2252px] right-0 z-10 h-[598px] w-[598px] rounded-tl-[100%] bg-main' />
				<div className='absolute top-[2250px] right-0 h-[600px] w-[600px] rounded-tl-[100%] bg-gradient-to-br from-tangerine to-strawberry opacity-30' />
			</div>
		</div>
	);
};

export default LandingBackground;
