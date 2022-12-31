import React, { useEffect } from "react";
import {
	IDemoDispatchToProps,
	IDemoPostRaw,
	IDemoPostState,
	DemoEntries
} from "../state/ducks/post/types";
import Post from "./post";

type AllProps = IDemoPostState & IDemoDispatchToProps;

const DemoList: React.FC<AllProps> = ({ data, fetchDemoPosts }: AllProps) => {
	// console.log("data", data,data.entries);

	useEffect(() => {
		fetchDemoPosts();
	}, [fetchDemoPosts]);
	return (
		<div>
			<ul>
				{data.entries&&data.entries.map((x:DemoEntries,i:number) => (
					 <div key={i} >{x.API}</div>
				))}
			</ul>
		</div>
	);
};

export default DemoList;
