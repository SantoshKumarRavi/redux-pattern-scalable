import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import {
	Action,
	MetaAction,
	PayloadAction,
	TypeConstant
} from "typesafe-actions";

import { postReducer ,postDemoReducer} from "./post/reducers";
import postSaga,{postDemoSaga} from "./post/sagas";
import { IPostState,IDemoPostState } from "./post/types";

// The top-level state object
export interface IApplicationState {
	post: IPostState;
}

export interface IDemoApplicationState {
	post: IDemoPostState;
}
export interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}
//  console.log(<TypeConstant>)
export interface IReducerAction<TPayload> extends Action<TypeConstant>,
		PayloadAction<TypeConstant, TPayload> {}
export const rootReducer = 
combineReducers<IApplicationState>
({
	post: postReducer
});


export const rootDemoReducer = 
combineReducers<IDemoApplicationState>
({
	post: postDemoReducer
});

export function* rootSaga() {
	yield all([fork(postSaga)]);
}
export function* rootDemoSaga() {
	yield all([fork(postDemoSaga)]);
}
interface IMeta {
	method: string;
	route: string;
}
