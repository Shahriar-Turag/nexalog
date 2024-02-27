'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, slideIn } from '@/lib/motion';
import { styles } from '@/constants/styles/styles';

const ClientSatisfaction = () => {
	const satisfactions = [
		{
			num: 5,
			text: 'Years of experience',
		},
		{
			num: 120,
			text: 'Projects completed',
		},
		{
			num: 100,
			text: 'Happy clients',
		},
		{
			num: 3,
			text: 'Award Achieved',
		},
	];
	return (
		<motion.div
			variants={staggerContainer as any}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className='absolute left-0 right-0 flex flex-col lg:flex-row justify-between my-[100px]'
		>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className=' w-full lg:w-1/2'
			>
				<Image
					src='/client.svg'
					alt='Client Satisfaction'
					width={700}
					height={700}
				/>
			</motion.div>
			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='w-full lg:w-1/2  p-4'
			>
				<h1 className={`${styles.title}`}>Client satisfaction</h1>
				<h2 className={`${styles.subTitle} mb-4 lg:w-[600px] w-full`}>
					We helping you to build your dream business
				</h2>
				<div className='grid grid-cols-2 justify-between items-center gap-5 max-w-[300px]'>
					{satisfactions.map((satisfaction, index) => (
						<div
							key={index}
							className='text-center border rounded-xl w-full h-full p-4'
						>
							<h1 className='text-[#FF5722] font-bold text-xl'>
								{satisfaction.num}+
							</h1>
							<p>{satisfaction.text}</p>
						</div>
					))}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ClientSatisfaction;
