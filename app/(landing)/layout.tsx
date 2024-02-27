const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className=' bg-[#ffff] overflow-hidden relative'>
			<div className='mx-auto max-w-screen-2xl h-full px-5'>
				{children}
			</div>
		</main>
	);
};

export default LandingLayout;
