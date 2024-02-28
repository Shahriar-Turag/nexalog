'use client';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

import { Roboto } from 'next/font/google';
import { Providers } from './Provider';

const fontRoboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
	weight: ['100', '300', '400', '500', '700'],
});

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			className={cn(fontRoboto.variable)}
			lang='en'
			suppressHydrationWarning
		>
			<head />

			<body className={cn('min-h-screen bg-background antialiased')}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
