'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

import { Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image';

import problem from '@/public/problemSolve.png';
import person from '@/public/person.png';
import group from '@/public/group.png';
import analysis from '@/public/analysis.png';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const serviceData = [
	{
		id: 1,
		img: problem,
		title: 'Full Spectrum Solutions',
		description:
			'From development to maintenance, we offer digital services under one roof',
	},
	{
		id: 2,
		img: group,
		title: 'Experienced team',
		description:
			'Our skilled professionals  ensuring top-notch results every time',
	},
	{
		id: 3,
		img: analysis,
		title: 'Proven Results',
		description:
			'We have helped numerous clients achieve online success through our strategic digital solutions',
	},
	{
		id: 4,
		img: person,
		title: 'Client-Centric Results',
		description:
			'We are commiWe work closely with you, keeping you informed and involved at every step of the processtted to providing customized solutions that meet your business requirements',
	},
];

export default function Carousel() {
	const [slidesPerView, setSlidesPerView] = useState(1);
	const [swiperRef, setSwiperRef] = useState(null);
	const [lastClicked, setLastClicked] = useState('right');

	useEffect(() => {
		// Function to update slidesPerView based on window width
		function updateSlidesPerView() {
			const screenWidth = window.innerWidth;
			if (screenWidth >= 1024) {
				setSlidesPerView(3);
			} else if (screenWidth >= 768) {
				setSlidesPerView(2);
			} else {
				setSlidesPerView(1);
			}
		}

		// Initial call to set the initial slidesPerView
		updateSlidesPerView();

		// Listen for window resize events and update slidesPerView
		window.addEventListener('resize', updateSlidesPerView);

		// Cleanup the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', updateSlidesPerView);
		};
	}, []);

	const goNext = () => {
		if (swiperRef) {
			swiperRef.slideNext();
		}
		setLastClicked('right');
	};

	const goPrev = () => {
		if (swiperRef) {
			swiperRef.slidePrev();
		}
		setLastClicked('left');
	};

	return (
		<>
			<Swiper
				onSwiper={setSwiperRef}
				slidesPerView={slidesPerView}
				centeredSlides={true}
				spaceBetween={30}
				pagination={{
					type: 'fraction',
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='mySwiper p-20'
			>
				{serviceData.map((service) => (
					<SwiperSlide
						key={service.id}
						className='absolute left-[200px]'
					>
						<Card
							key={service.title}
							className='p-5 w-[270px] lg:w-[350px] h-[350px] lg:h-[400px]  border-0 flex flex-col items-center justify-center rounded-3xl space-y-5 shadow-lg'
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
								<CardDescription>
									{service.description}
								</CardDescription>
							</CardHeader>
						</Card>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='navigation-buttons'>
				<button
					onClick={goPrev}
					className={`${
						lastClicked === 'left'
							? 'bg-[#5D50C6] border-0'
							: 'border'
					} rounded-full p-4  hover:bg-[#5D50C6]`}
				>
					<BiLeftArrowAlt
						style={{
							color: lastClicked === 'left' ? 'white' : 'black',
						}}
					/>
				</button>
				<button
					onClick={goNext}
					className={`${
						lastClicked === 'right' ? 'bg-[#5D50C6] border-0' : ''
					} rounded-full p-4 border hover:bg-[#5D50C6]`}
				>
					<BiRightArrowAlt
						style={{
							color: lastClicked === 'right' ? 'white' : 'black',
						}}
					/>
				</button>
			</div>
		</>
	);
}
