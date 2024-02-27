'use client';
import {
	fetchBlogsFailure,
	fetchBlogsStart,
	fetchBlogsSuccess,
} from '@/redux/blogSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			dispatch(fetchBlogsStart());

			try {
				const response = await fetch(
					'../components/blogs/blogData/blog.json'
				);
				if (!response.ok) {
					throw new Error('Failed to fetch blogs');
				}
				const data = await response.json();
				dispatch(fetchBlogsSuccess(data));
			} catch (err: any) {
				dispatch(fetchBlogsFailure(err.message));
			}
		};

		fetchData();
	}, [dispatch]);

	return <div>{children}</div>;
};

export default Container;
