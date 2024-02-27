'use client';
import {
	fetchBlogsFailure,
	fetchBlogsStart,
	fetchBlogsSuccess,
} from '@/redux/blogSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { styles } from '@/constants/styles/styles';
import { Button } from '../ui/button';
import { FiArrowRight } from 'react-icons/fi';

const Blog = ({ limit }: { limit?: number }) => {
	const dispatch = useDispatch();
	const blogs = useSelector((state: any) => state.blogReducer.data);
	console.log(blogs);
	const loading = useSelector((state: any) => state.blogReducer.loading);
	const error = useSelector((state: any) => state.blogReducer.error);

	useEffect(() => {
		const fetchData = async () => {
			dispatch(fetchBlogsStart());

			try {
				const response = await fetch('blog.json');
				if (!response.ok) {
					throw new Error('Failed to fetch');
				}
				const result = await response.json();
				dispatch(fetchBlogsSuccess(result));
			} catch (error: any) {
				dispatch(fetchBlogsFailure(error.message));
			}
		};

		fetchData();
	}, [dispatch]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	console.log(blogs);

	return (
		<div className='my-[100px] '>
			<div className='text-center mb-10 space-y-5 px-5'>
				<h1 className={`${styles.title}`}>Blogs</h1>
				<h2 className={`${styles.subTitle}`}>
					Read out all popular blogs
				</h2>
			</div>

			<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-5 justify-between items-center '>
				{blogs &&
					blogs.slice(0, limit || blogs.length).map((blog: any) => (
						<div key={blog.id} className=''>
							<Link href={`/blog/${blog.id}`}>
								<Card
									className=' p-2 hover:translate-y-1 hover:shadow-lg transition-all duration-500 ease-in-out '
									style={{
										textAlign: 'left',
										margin: '0 auto',
									}}
								>
									<CardContent
										className='
              p-0'
									>
										<Image
											src={blog.image}
											alt='image'
											width={400}
											height={400}
											className='w-full rounded-sm'
										/>
									</CardContent>
									<CardHeader className='p-1 pt-5 space-y-5'>
										<p className='text-[#4B6BFB] bg-slate-100 w-[105px] rounded-lg py-1 text-center'>
											{blog.category}
										</p>
										<CardTitle>
											{blog.title}: {blog.description}
										</CardTitle>
										<CardDescription>
											{blog.details.slice(0, 100)}...
										</CardDescription>
									</CardHeader>
									<CardFooter className='p-1 mt-5'>
										<div className='flex flex-row gap-8 items-center'>
											<div className='flex items-center gap-2'>
												<Image
													src={blog.user.avatar}
													alt='avatar'
													width={40}
													height={40}
													className='rounded-full w-[40px] h-[40px]'
												></Image>
												<p>{blog.user.name}</p>
											</div>
											<p>{blog.postDate}</p>
										</div>
									</CardFooter>
								</Card>
							</Link>
						</div>
					))}
			</div>
			<div className='text-center'>
				<Link href={'/blogs'}>
					<Button
						variant={'outline'}
						className='font-bold rounded-full'
					>
						Show More 🤌
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Blog;
