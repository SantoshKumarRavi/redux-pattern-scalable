import { action } from "typesafe-actions";
import { IPostRaw, PostActionTypes,IDemoPostRaw,PostDemoActionTypes } from "./types";
export const fetchPosts = () =>
	action(PostActionTypes.FETCH_POSTS, [], {
		method: "get",
		route: "/posts"
	});
export const fetchPostsSuccess = (data: IPostRaw[]) =>
	action(PostActionTypes.FETCH_POSTS_SUCCESS, data);
export const fetchPostsError = (message: string) =>
	action(PostActionTypes.FETCH_POSTS_ERROR, message);


	
export const fetchDemoPosts = () =>
	action(PostDemoActionTypes.FETCH_POSTS, [], {
		method: "GET",
		route: "/entries"
	});
export const fetchDemoPostsSuccess = (data: IDemoPostRaw[]) =>
	action(PostDemoActionTypes.FETCH_POSTS_SUCCESS, data);
export const fetchDemoPostsError = (message: string) =>
	action(PostDemoActionTypes.FETCH_POSTS_ERROR, message);
