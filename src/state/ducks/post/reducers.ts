import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { IPostRaw, IDemoPostRaw,IPostState,PostDemoActionTypes, PostActionTypes ,IDemoPostState} from "./types";
export const initialState: IPostState = {
	data: [],
	errors: [],
	loading: false
};

export const postReducer = (
	state: IPostState = initialState,
	action: Action<TypeConstant> & PayloadAction<TypeConstant, IPostRaw[]>
): IPostState => {
	switch (action.type) {
		case PostActionTypes.FETCH_POSTS: {
			return { ...state, loading: true };
		}
		case PostActionTypes.FETCH_POSTS_SUCCESS: {
			return { ...initialState, data: action.payload };
		}
		case PostActionTypes.FETCH_POSTS_ERROR: {
			return {
				...state
			};
		}
		default:
			return state;
	}
};

export const initialDemoState: IDemoPostState = {
	data:{} as IDemoPostRaw,
	errors: [],
	loading: false
};

export const postDemoReducer = (
	state: IDemoPostState = initialDemoState,
	action: Action<TypeConstant> &
	 PayloadAction<TypeConstant, IDemoPostRaw>
): IDemoPostState => {
	switch (action.type) {
		case PostDemoActionTypes.FETCH_POSTS: {
			console.log("fetching ==> state", state)
			return { ...state, loading: true };
		}
		case PostDemoActionTypes.FETCH_POSTS_SUCCESS: {
			console.log("fetched ==> state", state,"action.payload ==>",action.payload )
			return { ...state, data: action.payload };
		}
		case PostDemoActionTypes.FETCH_POSTS_ERROR: {
			return {
				...state
			};
		}
		default:
			return state;
	}
};
