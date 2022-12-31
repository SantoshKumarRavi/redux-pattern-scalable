import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/postList";
import { IApplicationState,IDemoApplicationState } from "../state/ducks/index";
import { fetchPosts,fetchDemoPosts } from "../state/ducks/post/actions";
import { IPostState,IDemoPostState } from "../state/ducks/post/types";
import DemoList from "../components/DemoList"
const PostListContainer = () => {
	// const dispatch = useDispatch();
	
	// const stateToProps: IPostState = useSelector(
	// 	({ post }: IApplicationState) => ({
	// 		loading: post.loading,
	// 		errors: post.errors,
	// 		data: post.data
	// 	})
	// );

	// const dispatchToProps = {
	// 	fetchPosts: useCallback(() => dispatch(fetchPosts()), [dispatch])
	// };

	// return <PostList {...stateToProps} {...dispatchToProps} />;
const dispatch = useDispatch();
	
	const stateToProps: IDemoPostState = useSelector(
		({ post }: IDemoApplicationState) => ({
			loading: post.loading,
			errors: post.errors,
			data: post.data
		})
	);

	const dispatchToProps = {
		fetchDemoPosts: useCallback(() =>
		 dispatch(fetchDemoPosts()), [dispatch])
	};

	return <DemoList {...stateToProps} {...dispatchToProps} />;

};

export default PostListContainer;
