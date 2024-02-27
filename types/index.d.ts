export type SiteConfig = {
	name: string;
	description: string;
	url: string;
	ogImage: string;
	links: {
		facebook: string;
		linkedin: string;
	};
};

export type MenuItem = {
	id: number;
	name: string;
	href: string;
};

export interface User {
	id: number;
	name: string;
	avatar: string;
}

export interface BlogPost {
	id: number;
	user: User;
	category: string;
	image: string;
	postDate: string;
	title: string;
	description: string;
	details: string;
	timeToRead: string;
}

export type BlogData = BlogPost[];
