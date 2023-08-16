export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [];

export const dictionary = {
		"/": [4],
		"/about": [10],
		"/blogs": [11],
		"/blogs/first": [13],
		"/blogs/second": [14],
		"/blogs/third": [15],
		"/blogs/[...slug]": [12],
		"/(auth)/login": [5,[2]],
		"/marketing/[[lang]]": [16],
		"/(auth)/password/forgot": [6,[2,3]],
		"/(auth)/password/info": [7,[2,3]],
		"/(auth)/password/reset": [8,[2,3]],
		"/products": [17],
		"/products/[productId=integer]": [18],
		"/products/[productId=integer]/items": [19],
		"/products/[productId=integer]/items/[itemId]": [20],
		"/(auth)/register": [9,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';