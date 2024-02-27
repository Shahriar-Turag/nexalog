'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../lib/motion';
import { styles } from '@/constants/styles/styles';

const Services = () => {
	const services = [
		{
			img: '/service1.png',
			title: 'Creative',
			listItems: [
				'Branding',
				'Graphic design',
				'Content',
				'UI/UX design',
			],
		},
		{
			img: '/service2.png',
			title: 'Web Solutions',
			listItems: [
				'Web development',
				'Web design',
				'UI/UX improvement',
				'Web maintenance',
			],
		},
		{
			img: '/service3.png',
			title: 'Digital Marketing',
			listItems: [
				'SEO',
				'Social media marketing',
				'Paid advertising',
				'Email marketing',
				'Analytics & reporting',
			],
		},
	];
	return (
		<motion.div
			variants={staggerContainer as any}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
		>
			<motion.div variants={fadeIn('up', 'spring', 0.2, 2)}>
				<div className='text-center space-y-4'>
					<h1 className={`${styles.title}`}>Our services</h1>
					<h2 className={`${styles.subTitle}`}>
						Our top service categories for you
					</h2>
				</div>
				<div className='flex flex-col lg:flex-row items-center justify-between gap-10 mt-16 relative'>
					{services.map((service, index) => (
						<Card
							key={service.title}
							className='p-5 w-[270px] lg:w-[350px] h-[350px] lg:h-[400px] shadow-2xl border-0 flex flex-col items-center justify-center rounded-3xl space-y-5'
						>
							<Image
								src={service.img}
								alt={service.title}
								width={50}
								height={50}
								className='mx-auto'
							/>
							<CardHeader>
								<CardTitle className='text-center text-xl'>
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent className=''>
								<ul>
									{service.listItems.map((item, index) => (
										<li
											key={index}
											className='list-disc text-base'
										>
											{item}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					))}
					<Image
						src='/serviceObject.png'
						alt='object'
						width={100}
						height={100}
						className='absolute -right-[120px] top-0 hidden'
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
