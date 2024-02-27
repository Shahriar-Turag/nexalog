import React from 'react';
import logo from '@/public/images/logo.png';
import Image from 'next/image';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { TfiInstagram } from 'react-icons/tfi';

type Props = {};

const Footer = (props: Props) => {
	const companyMenus: { id: string; title: string; navigateTo: string }[] = [
		{
			id: '1',
			title: 'About',
			navigateTo: '/about',
		},
		{
			id: '2',
			title: 'Services',
			navigateTo: '/services',
		},
	];

	const supportMenus: { id: string; title: string; navigateTo: string }[] = [
		{
			id: '1',
			title: 'Privacy Policy',
			navigateTo: '/Privacy',
		},
		{
			id: '2',
			title: 'Terms & Condition',
			navigateTo: '/terms&condition',
		},
		{
			id: '3',
			title: 'FAQ’s',
			navigateTo: '/faq',
		},
		{
			id: '4',
			title: 'Blog',
			navigateTo: '/blogs',
		},
	];

	const getInTouchMenus: { id: string; title: string; navigateTo: string }[] =
		[
			{
				id: '1',
				title: 'Nexalog@gmail.com',
				navigateTo: '/email',
			},
			{
				id: '2',
				title: 'Whatsapp us',
				navigateTo: '/whatsapp',
			},
		];
	return (
		<div className='flex my-10 '>
			<div className='w-[40%] py-10 space-y-14'>
				<Image src={logo} alt='logo' width={150} height={150} />
				<h1 className='font-bold text-slate-600 w-[250px]'>
					Your digital excellency in a click step away.
				</h1>
				<div className='flex items-center justify-start gap-5'>
					<div className='bg-[#5D50C6CC] p-2 rounded-full w-[35px] h-[35px] flex items-center justify-center'>
						<BiLogoFacebook size={40} fill='#ffff' />
					</div>

					<div className='bg-[#5D50C6CC] p-2 rounded-full w-[35px] h-[35px] flex items-center justify-center'>
						<FaLinkedinIn size={40} fill='#ffff' />
					</div>

					<div className='bg-[#5D50C6CC] p-2 rounded-full w-[35px] h-[35px] flex items-center justify-center'>
						<TfiInstagram size={40} fill='#ffff' />
					</div>
					<div className='bg-[#5D50C6CC] p-2 rounded-full w-[35px] h-[35px] flex items-center justify-center'>
						<FaWhatsapp size={40} fill='#ffff' />
					</div>
				</div>
			</div>
			<div className='w-[60%] py-10 flex  justify-evenly'>
				<div>
					<h1 className='font-bold text-lg'>Company</h1>
					{companyMenus.map((menu) => (
						<div key={menu.id}>
							<p className='text-gray-500 hover:text-[#222831]  text-[15px]  transition duration-300 ease-in-out py-2 cursor-pointer'>
								{menu.title}
							</p>
						</div>
					))}
				</div>
				<div>
					<h1 className='font-bold text-lg'>Support</h1>
					{supportMenus.map((menu) => (
						<div key={menu.id}>
							<p className='text-gray-500 hover:text-[#222831]  text-[15px]  transition duration-300 ease-in-out py-2 cursor-pointer'>
								{menu.title}
							</p>
						</div>
					))}
				</div>
				<div>
					<h1 className='font-bold text-lg'>Get in touch</h1>
					{getInTouchMenus.map((menu) => (
						<div key={menu.id}>
							<p className='text-gray-500 hover:text-[#222831]  text-[15px]  transition duration-300 ease-in-out py-2 cursor-pointer'>
								{menu.title}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
