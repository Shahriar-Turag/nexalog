'use client';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../lib/motion';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { Video } from 'lucide-react';
import { HiPlayCircle } from 'react-icons/hi2';

const LandingHero = () => {
	return (
		<div className='my-10 hero__background h-[100vh]'>
			<motion.div
				variants={staggerContainer as any}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className='flex lg:flex-row flex-col justify-between items-center'
			>
				<motion.div
					variants={fadeIn('right', 'tween', 0.2, 1)}
					className='lg:max-w-[50%] space-y-5 lg:space-y-10'
				>
					<h1 className='text-4xl lg:text-7xl font-bold leading-[40px] lg:leading-[100px]'>
						Your{' '}
						<span className='text-[#f85e9f]'>
							One-Stop <br /> Solution for
						</span>{' '}
						<br /> Digital Excellence
					</h1>
					<p>
						We’re a full-service web development and digital
						marketing agency that helps you to build your website
						and rank on google with SEO & paid advertising. Let’s
						meet together.
					</p>
					<div className='space-x-5 flex items-center'>
						<Button
							variant='default'
							className='bg-[#5D50C6] hover:bg-[#aea4f1] shadow-2xl rounded-full'
						>
							Get In Touch
						</Button>
						<Button variant='outline' className='rounded-full'>
							<HiPlayCircle
								size='20'
								className='text-[#5D50C6]'
							/>
							&nbsp;Learn More
						</Button>
					</div>
				</motion.div>
				<motion.div
					variants={fadeIn('left', 'tween', 0.2, 1)}
					className='lg:max-w-[50%]'
				>
					<Image
						src='/hero-image.png'
						alt='hero image'
						width={650}
						height={650}
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default LandingHero;
