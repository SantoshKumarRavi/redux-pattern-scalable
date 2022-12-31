import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { IMetaAction } from "..";
import apiCaller from "../../utils/apiCaller";
import DemoapiCaller from "../../utils/DemoApicaller";
import { fetchPostsError, fetchPostsSuccess ,fetchDemoPostsSuccess,
	fetchDemoPostsError} from "./actions";
import { IPostRaw,IDemoPostRaw,
	PostDemoActionTypes, PostActionTypes
 } from "./types";

/**
 * @desc Business logic of effect.
 */
function* handleFetch(action: IMetaAction): Generator {
	try {
		const res: IPostRaw[] | any = yield call(
			apiCaller,
			action.meta.method,
			action.meta.route
		);
		yield put(fetchPostsSuccess(res));
	} catch (err) {
		if (err instanceof Error) {
			yield put(fetchPostsError(err.stack!));
		} else {
			yield put(fetchPostsError("An unknown error occured."));
		}
	}
}

function* DemohandleFetch(action: IMetaAction): Generator {
	// console.log("saga action",action)
	try {
		const res: IDemoPostRaw | any = yield call(
			DemoapiCaller,
			action.meta.method,
			action.meta.route
		);
		// console.log("saga res", res, action)
		yield put(fetchDemoPostsSuccess(res));
	} catch (err) {
		if (err instanceof Error) {
			console.log("saga res err 1", err)
			yield put(fetchDemoPostsError(err.stack!));
		} else {
			console.log("saga res err 2", err)
			yield put(fetchDemoPostsError("An unknown error occured."));
		}
	}
}


/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest(): Generator {
	yield takeEvery(PostActionTypes.FETCH_POSTS, handleFetch);
}
function* watchDemoFetchRequest(): Generator {
	yield takeEvery(PostDemoActionTypes.FETCH_POSTS, DemohandleFetch);
}
/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* postSaga() {
	yield all([fork(watchFetchRequest)]);
}
export  function* postDemoSaga() {
	yield all([fork(watchDemoFetchRequest)]);
}
