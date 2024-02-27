'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import AppTopNavigation from '../layout-components/app-top-navigation';
import Image from 'next/image';
import { BsClockHistory } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import NavbarBlog from './NavbarBlog';

type Props = {};

const SingleBlog = (props: Props) => {
	const params = useParams();

	const id = params.id;
	console.log(id);

	// console.log(id);
	const blogData = useSelector((state: any) => state.blogReducer.data);
	const blog = blogData.find((blog: any) => String(blog.id) === String(id));

	console.log(blog);

	return (
		<>
			<div
				className=' w-full lg:h-[450px] h-[620px]'
				style={{
					background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${blog.image}) no-repeat center fixed`,
					backgroundSize: 'cover',
				}}
			>
				<div className='mx-auto max-w-screen-2xl h-full p-4'>
					<NavbarBlog />

					{blog && (
						<div className='text-white mt-[60px]'>
							<h1 className='text-5xl font-bold'>{blog.title}</h1>
							<h2 className='text-4xl font-bold mt-5'>
								{blog.description}
							</h2>
							<div className='mt-[100px] flex flex-col lg:flex-row items-center gap-5'>
								<div className='flex items-center gap-5'>
									<p>by {blog.user.name}</p>

									<hr className='w-[15px] ' />

									<div className='flex items-center gap-2'>
										<BsClockHistory />
										<p>{blog.timeToRead} read</p>
									</div>
								</div>
								<hr className='w-[15px] hidden lg:block' />
								<div className='flex items-center gap-2'>
									<SlCalender />
									<p>Posted at {blog.postDate}</p>
								</div>
							</div>
							<div className='text-black mt-[200px]'>
								<p>{blog.details}</p>
								<p>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Adipisci magnam eligendi
									dolores! Voluptatum dolorem consequuntur,
									facilis itaque minus voluptas reiciendis sit
									quae cupiditate quis blanditiis iste
									dignissimos illum harum accusantium, nulla,
									impedit asperiores totam et? Veritatis
									quisquam ipsam labore voluptate error
									officiis pariatur nihil dicta quo
									repellendus corrupti mollitia, enim quia
									earum sapiente vel laborum quidem illo magni
									omnis magnam! A provident fugiat voluptate
									pariatur iusto sunt numquam repellendus
									tempora rerum quibusdam. Dicta fugit saepe
									adipisci rerum iste ipsa dolorum, voluptatem
									molestiae maxime culpa, ea, aliquid vero
									iure ex nisi cupiditate impedit ab. Debitis
									totam atque dignissimos corporis earum illum
									maxime alias suscipit et nesciunt blanditiis
									veniam dicta, molestiae qui delectus, non
									similique molestias at accusantium quos
									facilis. Rerum, molestiae ducimus laboriosam
									eligendi consectetur odio nisi tenetur autem
									deserunt asperiores suscipit quia,
									temporibus porro adipisci eius eos saepe
									placeat repellat. Quia sequi a, iste
									repellat ratione cumque tempora, fugiat
									voluptate, atque adipisci consequatur
									facilis. Cum nulla eius quos accusamus ex
									autem ea distinctio asperiores. Laudantium
									dolorum rerum asperiores laboriosam
									reiciendis harum, natus quos, ratione dolor
									culpa inventore quia a, necessitatibus
									itaque ea sapiente perferendis quisquam.
									Pariatur, repellendus quo, dolorem voluptas
									labore impedit magni, ab architecto sit
									molestias minus ullam. Voluptatem, sunt quia
									neque quaerat inventore, nostrum minima
									magnam aliquid quam consectetur cupiditate
									numquam cumque veritatis repudiandae
									architecto. Quae id illo expedita. Alias
									quibusdam pariatur, modi asperiores quia
									commodi fugiat animi dicta, aliquid
									voluptatem ullam ea enim autem vero dolores
									nobis laboriosam! Optio recusandae placeat,
									tenetur ducimus provident eaque ad
									consequatur at doloremque tempore
									accusantium, dignissimos veritatis quis?
									Iure maxime dignissimos sint. Commodi
									adipisci ratione magni porro hic aliquam
									amet voluptatem excepturi sint, eum, soluta
									dolorem ad consequuntur! Earum ipsum commodi
									rem molestiae ut ea, repellat reprehenderit
									sit quo architecto aperiam quae sapiente
									tenetur accusamus neque quasi illum. Est
									quidem consequatur maiores. Officiis ipsum
									autem quo nam impedit nihil numquam! Ipsam
									id, sit officiis tempora officia,
									voluptatibus veritatis, dolores expedita
									quaerat voluptatum obcaecati dolore. Iusto
									distinctio laudantium minima, modi beatae
									corporis similique numquam dolores eligendi,
									nesciunt amet obcaecati eaque veritatis
									dolorem quisquam. Dignissimos tenetur magnam
									esse commodi odit, laudantium mollitia
									incidunt id ex voluptatibus assumenda rerum
									quisquam molestias ipsam rem placeat nemo
									culpa hic, odio tempora ab praesentium
									facere, illo cum. Ipsa facere aliquid fugit
									quibusdam molestias eius blanditiis, eum
									labore quis dignissimos molestiae excepturi
									enim et, ducimus provident sed voluptate,
									veritatis at saepe debitis. Repellat cumque
									nobis distinctio modi quod, maiores quo rem
									qui, voluptas fugit officiis autem magni.
									Animi qui minus asperiores, id, hic
									dignissimos eos doloremque velit quos culpa
									voluptatibus possimus dolorem minima rerum
									ea. Maxime, sed. Atque soluta deleniti amet
									perspiciatis reprehenderit excepturi
									assumenda possimus culpa, natus, corporis
									eaque, hic ullam suscipit minus dolorem.
									Rerum repudiandae cum modi ipsum ullam!
									Ipsum rem atque id iusto quam. Dolorem quas
									ut sint, dolore reprehenderit perspiciatis
									aliquid cumque consequuntur nostrum! Neque,
									accusamus sunt! Dolor doloremque, illum
									commodi dignissimos vel consectetur animi
									necessitatibus at magni, quasi, voluptatibus
									quod debitis eius. Labore, rerum ex
									consequatur ullam incidunt accusamus ratione
									obcaecati quidem et.
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default SingleBlog;
