'use client';
import React from 'react';
import { styles } from '@/constants/styles/styles';
import ReviewCarousel from './reviewCarousel/ReviewCarousel';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '@/lib/motion';

const Reviews = () => {
	return (
		<motion.div
			variants={staggerContainer as any}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className='mt-[880px] md:mt-[1100px] lg:mt-[800px]'
		>
			<motion.div variants={slideIn('left', 'tween', 0.2, 1.2)}>
				<div className='text-center space-y-5'>
					<h1 className={`${styles.title}`}> Client satisfaction</h1>
					<h2 className={`${styles.subTitle}`}>
						What Our Client Said about us
					</h2>
				</div>
				<div className='my-14'>
					<ReviewCarousel />
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Reviews;
