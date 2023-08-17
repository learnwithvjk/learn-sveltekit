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
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25')
];

export const server_loads = [];

export const dictionary = {
		"/": [6],
		"/(productLayout)/about": [14,[3]],
		"/(productLayout)/blogs": [15,[3]],
		"/(productLayout)/blogs/first": [17,[3]],
		"/(productLayout)/blogs/second": [18,[3]],
		"/(productLayout)/blogs/third": [19,[3]],
		"/(productLayout)/blogs/[...slug]": [16,[3]],
		"/(productLayout)/home": [20,[3]],
		"/(productLayout)/(auth)/login": [8,[3,4]],
		"/(productLayout)/marketing/[[lang]]": [21,[3]],
		"/(productLayout)/(auth)/password/forgot": [9,[3,4,5]],
		"/(DifferentPurposeLayout)/(auth)/password/full": [7,[2]],
		"/(productLayout)/(auth)/password/info": [10,[3,4,5]],
		"/(productLayout)/(auth)/password/reset": [11,[3,4,5]],
		"/(productLayout)/(auth)/password/verify": [12],
		"/(productLayout)/products": [22,[3]],
		"/(productLayout)/products/[productId=integer]": [23,[3]],
		"/(productLayout)/products/[productId=integer]/items": [24,[3]],
		"/(productLayout)/products/[productId=integer]/items/[itemId]": [25,[3]],
		"/(productLayout)/(auth)/register": [13,[3,4]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';