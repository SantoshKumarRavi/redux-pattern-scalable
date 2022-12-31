import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import DemoList from "../components/DemoList";
import { IDemoApplicationState } from "../state/ducks/index";
import { fetchDemoPosts } from "../state/ducks/post/actions";
import { IDemoPostState } from "../state/ducks/post/types";

const Demo = () => {
	const dispatch = useDispatch();
	
	const stateToProps: IDemoPostState = useSelector(
		({ post }: IDemoApplicationState) => ({
			loading: post.loading,
			errors: post.errors,
			data: post.data
		})
	);

	const dispatchToProps = {
		fetchDemoPosts: useCallback(() => dispatch(fetchDemoPosts()),
         [dispatch])
	};

	return <DemoList {...stateToProps} {...dispatchToProps} />;
};

export default Demo;