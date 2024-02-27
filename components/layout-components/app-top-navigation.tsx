'use client';
import React from 'react';
import logoImg from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { navVariants } from '@/lib/motion';
type Props = {};

export default function AppTopNavigation({}: Props) {
	const navMenus: { id: string; title: string; navigateTo: string }[] = [
		{
			id: '1',
			title: 'Home',
			navigateTo: '/',
		},
		{
			id: '2',
			title: 'Services',
			navigateTo: '/services',
		},
		{
			id: '3',
			title: 'Blog',
			navigateTo: '/blogs',
		},
		{
			id: '4',
			title: 'About Us',
			navigateTo: '/about-us',
		},
	];
	return (
		<motion.header
			variants={navVariants}
			initial='hidden'
			whileInView='show'
			className='py-5  top-0'
		>
			<div className='md:hidden items-center flex justify-center my-3'>
				<div className='flex items-center justify-center '>
					<Link href={'/'} className='cursor-pointer'>
						<Image
							src={logoImg}
							alt='Logo'
							className='object-contain w-28 md:w-32 lg:w-48'
						/>
					</Link>
				</div>
			</div>
			<div className='flex justify-between items-center'>
				{/* Logo on the left */}
				<div className='hidden md:block md:flex-shrink-0'>
					<Link href={'/'} className='cursor-pointer'>
						<Image
							src={logoImg}
							alt='Logo'
							className='object-contain w-28 md:w-32 lg:w-48'
						/>
					</Link>
				</div>

				{/* Navigation in the middle */}
				<nav className='flex-grow flex items-center justify-start md:justify-center'>
					<ul className='flex items-center space-x-6'>
						{navMenus.map((menu) => (
							<li
								key={menu.id}
								className='px-0 md:px-3 text-gray-500 hover:text-[#222831] font-semibold text-xs sm:text-sm md:text-lg transition duration-300 ease-in-out'
							>
								<Link href={menu.navigateTo}>{menu.title}</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className='md:hidden items-center flex justify-end my-3'>
					<button
						//   variant={"default"}
						className='custom-button capitalize rounded-full text-lg'
						//   size={"lg"}
					>
						get in touch
					</button>
				</div>

				{/* Button on the right */}
				<div className='hidden md:block ml-auto'>
					<button
						//   variant={"default"}
						className='custom-button capitalize rounded-full text-lg'
						//   size={"lg"}
					>
						get in touch
					</button>
				</div>
			</div>
		</motion.header>
	);
}
