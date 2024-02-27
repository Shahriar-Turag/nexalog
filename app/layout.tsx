'use client';
import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Providers } from './Provider';
import AppTopNavigation from '@/components/layout-components/app-top-navigation';
import { useRouter } from 'next/router';

const fontRoboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
	weight: ['100', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
	title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
	description: siteConfig.description,
	// TODO: need to add the keywords (search)
	keywords: [''],
	authors: [
		{
			name: 'Nexalog',
			url: 'url here',
		},
	],
	creator: 'Team Nexalog',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
};

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
