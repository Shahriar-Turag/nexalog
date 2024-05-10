'use client';
import React from 'react';
import Carousel from './Carousel';
import { styles } from '@/constants/styles/styles';
import Image from 'next/image';
import object from '@/public/carouselObject.png';
import { motion } from 'framer-motion';
import { arrowVariants, fadeIn, staggerContainer } from '@/lib/motion';

type Props = {};

const WhyChooseUs = (props: Props) => {
	return (
		<motion.div
			variants={staggerContainer as any}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className='flex flex-col lg:flex-row justify-center items-center gap-5 relative'
		>
			<motion.div
				variants={arrowVariants('left')}
				className='absolute -left-[110px] -top-[80px]'
			>
				<Image src={object} alt='object' />
			</motion.div>
			<motion.div
				variants={fadeIn('right', 'tween', 0.2, 1)}
				className='lg:w-[40%] w-full lg:mb-[200px] mb-0'
			>
				<div className='space-y-4 text-center lg:text-start'>
					<h1 className={`${styles.title}`}>Why choose us?</h1>
					<h2 className={`${styles.subTitle}`}>
						We offer best services
					</h2>
					<p className='text-slate-500'>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Suscipit iusto at non porro esse quia recusandae
						unde rem ratione ipsa possimus quae dicta expedita
						sapiente ad, nihil labore sequi. Perferendis.
					</p>
				</div>
			</motion.div>
			{/* <motion.div
				variants={fadeIn('left', 'tween', 0.2, 1)}
				className='lg:w-[60%] w-full mb-20'
			>
				<Carousel />
			</motion.div> */}
		</motion.div>
	);
};

export default WhyChooseUs;
