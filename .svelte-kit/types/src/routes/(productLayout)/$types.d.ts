import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/(productLayout)';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(productLayout)/(auth)/login" | "/(productLayout)/(auth)/password/forgot" | "/(productLayout)/(auth)/password/info" | "/(productLayout)/(auth)/password/reset" | "/(productLayout)/(auth)/register" | "/(productLayout)/about" | "/(productLayout)/blogs" | "/(productLayout)/blogs/[...slug]" | "/(productLayout)/blogs/first" | "/(productLayout)/blogs/second" | "/(productLayout)/blogs/third" | "/(productLayout)/home" | "/(productLayout)/marketing/[[lang]]" | "/(productLayout)/products" | "/(productLayout)/products/[productId=integer]" | "/(productLayout)/products/[productId=integer]/items" | "/(productLayout)/products/[productId=integer]/items/[itemId]"
type LayoutParams = RouteParams & { slug?: string,lang?: string,productId?: string,itemId?: string }
type LayoutParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;