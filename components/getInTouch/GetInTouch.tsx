import React from 'react';
import { Button } from '../ui/button';

type Props = {};

const GetInTouch = (props: Props) => {
	return (
		<div
			className='w-full lg:p-[180px] md:p-[100px] p-[50px] rounded-2xl'
			style={{
				backgroundImage: `linear-gradient(27deg, rgba(92,54,205,1) 22%, rgba(237,68,208,1) 83%, rgba(245,166,55,1) 97%)`,
			}}
		>
			<div className='flex flex-col lg:flex-row lg:justify-between justify-center items-center'>
				<h1 className='text-white font-bold text-4xl lg:w-[450px] w-full text-center lg:text-start leading-[60px]'>
					We Would Like To Start Your Project With Us.
				</h1>
				<Button
					variant={'secondary'}
					className='px-8 lg:px-16 h-[50px] mt-10 lg:mt-0'
				>
					Get in touch
				</Button>
			</div>
		</div>
	);
};

export default GetInTouch;
