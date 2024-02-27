'use client';

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationControlsProps {
	hasNextPage: boolean;
	hasPrevPage: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = ({
	hasNextPage,
	hasPrevPage,
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const page = searchParams.get('page') ?? '1';
	const per_page = searchParams.get('per_page') ?? '10';

	return (
		<div className='flex justify-center items-center gap-2 my-10'>
			<button
				className='bg-[#5d50c6] text-white px-4 py-2 rounded-full'
				disabled={!hasPrevPage}
				onClick={() => {
					router.push(
						`/blogs/?page=${Number(page) - 1}&per_page=${per_page}`
					);
				}}
			>
				prev page
			</button>

			<div>
				{page} / {Math.ceil(20 / Number(per_page))}
			</div>

			<button
				className='bg-[#5d50c6] text-white px-4 py-2 rounded-full'
				disabled={!hasNextPage}
				onClick={() => {
					router.push(
						`/blogs/?page=${Number(page) + 1}&per_page=${per_page}`
					);
				}}
			>
				next page
			</button>
		</div>
	);
};

export default PaginationControls;
