import { IMetaAction } from "..";
export interface IPostState {
	readonly data: IPostRaw[];
	readonly loading: boolean;
	readonly errors: [];
}
export type ApiResponse = Record<string, any>;
export interface IPostRaw extends ApiResponse {
	id: number;
	title: string;
	body: string;
	userId: number;
}
export const PostActionTypes = {
	FETCH_POSTS: "@@post/FETCH_POSTS",
	FETCH_POSTS_SUCCESS: "@@post/FETCH_POSTS_SUCCESS",
	FETCH_POSTS_ERROR: "@@post/FETCH_POSTS_ERROR"
};
export const PostDemoActionTypes = {
	FETCH_POSTS: "@@post/FETCHDemo_POSTS",
	FETCH_POSTS_SUCCESS: "@@post/FETCH_POSTSDemo_SUCCESS",
	FETCH_POSTS_ERROR: "@@post/FETCH_POSTSDemo_ERROR"
};



export interface IDispatchToProps {
	fetchPosts: () => IMetaAction;
}

export interface IDemoDispatchToProps {
	fetchDemoPosts:()=> IMetaAction;
}
export interface IDemoPostState {
	readonly data:IDemoPostRaw; 
	readonly loading: boolean;
	readonly errors: [];
}
export interface IDemoPostRaw extends ApiResponse {
	count: number;
	entrires: DemoEntries[];
}

export interface DemoEntries {
	API:string,
	Description:string,
	Auth:string,
	HTTPS:boolean,
	Cors:string,
	Link:string,
	Category:string
}
