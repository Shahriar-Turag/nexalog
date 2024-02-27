'use client';
import React, { useState, useTransition } from 'react';
import NavbarBlog from '@/components/blogs/NavbarBlog';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import PaginationControls from '@/components/PaginationControls';
import { styles } from '@/constants/styles/styles';

type Props = {};

const Page = ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const [input, setInput] = useState('');
	const [isPending, startTransition] = useTransition();
	const [filteredBlogs, setFilteredBlogs] = useState([]);

	const allBlogs = useSelector((state: any) => state.blogReducer.data);

	const page = searchParams['page'] ?? '1';
	const per_page = searchParams['per_page'] ?? '10';

	// mocked, skipped and limited in the real app
	const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
	const end = start + Number(per_page); // 5, 10, 15 ...

	const entries = allBlogs.slice(start, end);

	const handleChange = (e: any) => {
		setInput(e.target.value);
		startTransition(() => {
			setFilteredBlogs(
				allBlogs.filter((blog: any) => {
					return (
						blog.title
							.toLowerCase()
							.includes(input.toLowerCase()) ||
						blog.category
							.toLowerCase()
							.includes(input.toLowerCase()) ||
						blog.user.name
							.toLowerCase()
							.includes(input.toLowerCase())
					);
				})
			);
		});
	};

	return (
		<div className=''>
			<div
				className=''
				style={{
					background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') no-repeat center fixed`,
					backgroundSize: 'cover',
					height: '400px',
					width: '100%',
					position: 'absolute',
				}}
			>
				{' '}
				<div className='text-center mt-[170px] '>
					<h1 className='text-white font-bold lg:text-5xl text-3xl'>
						Search for popular blogs
					</h1>
					<input
						type='text'
						value={input}
						onChange={handleChange}
						placeholder='Search for a blog...'
						className='mb-4 p-2 border px-4 mt-5 lg:w-[400px] w-[300px] rounded-full outline-none'
					/>
				</div>
			</div>
			<div className='max-w-screen-2xl mx-auto p-5'>
				<NavbarBlog />
			</div>

			<div className='mt-[350px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5'>
				{isPending && <div>Loading...</div>}

				{input &&
					filteredBlogs.map((blog: any) => (
						<div key={blog.id}>
							<Link href={`/blog/${blog.id}`}>
								<Card
									className='p-2 hover:translate-y-1 hover:shadow-lg transition-all duration-500 ease-in-out'
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
			{input && filteredBlogs.length === 0 && (
				<div>
					<p className='text-red-500 text-center font-bold text-4xl'>
						No blogs found!!
					</p>
				</div>
			)}
			<div className=' max-w-screen-2xl mx-auto'>
				<div className='text-center space-y-5'>
					<h1 className={`${styles.subTitle} my-16`}>
						Our popular Blogs
					</h1>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5'>
					{entries.map((blog: any) => (
						<div key={blog.id}>
							<Link href={`/blog/${blog.id}`}>
								<Card
									className=' p-2 hover:translate-y-1 hover:shadow-lg transition-all duration-500 ease-in-out'
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
			</div>
			<PaginationControls
				hasNextPage={end < allBlogs.length}
				hasPrevPage={start > 0}
			/>
		</div>
	);
};

export default Page;
