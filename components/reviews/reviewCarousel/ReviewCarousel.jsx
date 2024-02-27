'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './ReviewCarousel.css';

import { Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image';

import people1 from '@/public/people1.png';
import people2 from '@/public/people2.png';
import people3 from '@/public/people3.png';
import analysis from '@/public/analysis.png';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const reviewData = [
	{
		id: 1,
		img: people1,
		name: 'Amelia Joseph',
		role: 'Chief Manager',
		review: 'Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ',
	},
	{
		id: 2,
		img: people2,
		name: 'Amelia Joseph',
		role: 'Chief Manager',
		review: 'Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ',
	},
	{
		id: 3,
		img: people3,
		name: 'Amelia Joseph',
		role: 'Chief Manager',
		review: 'Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ',
	},
	{
		id: 4,
		img: people1,
		name: 'Amelia Joseph',
		role: 'Chief Manager',
		review: 'Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ',
	},
	{
		id: 5,
		img: people2,
		name: 'Amelia Joseph',
		role: 'Chief Manager',
		review: 'Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ',
	},
];

export default function ReviewCarousel() {
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
				// centeredSlides={true}
				spaceBetween={30}
				navigation={true}
				modules={[Navigation]}
				className='mySwiper p-20'
			>
				{reviewData.map((review, index) => (
					<SwiperSlide key={review.id}>
						<Card
							key={review.id}
							className={` w-[270px] lg:w-[350px] border-0 flex flex-col  rounded-3xl space-y-5`}
							style={{
								textAlign: 'left',
								backgroundColor:
									index === 0 ? '#5D50C6' : '#F8F9FF',
								color: index === 0 ? 'white' : 'inherit',
							}}
						>
							<CardHeader className=''>
								<div className='flex gap-5'>
									<Image
										src={review.img}
										alt={review.name}
										width={50}
										height={50}
									/>
									<div>
										<CardTitle>{review.name}</CardTitle>
										<p className='text-start text-sm'>
											{review.role}
										</p>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className='text-sm'>{review.review}</p>
							</CardContent>
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
