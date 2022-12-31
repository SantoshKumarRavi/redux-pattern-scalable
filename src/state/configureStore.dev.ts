import { applyMiddleware, createStore, Store } from "redux";
import { IApplicationState, rootReducer,rootDemoSaga, rootDemoReducer,rootSaga,IDemoApplicationState } from "./ducks/index";
import sagaMiddleware from "./middlewares/sagas";

export default function configureStore(
	initialState: IApplicationState
): Store<IApplicationState> {
	const middlewares = applyMiddleware(sagaMiddleware); // Create Store
	const store = createStore(rootReducer, initialState, middlewares);

	sagaMiddleware.run(rootSaga);

	return store;
}

export  function configureDemoStore(
	initialState: IDemoApplicationState
): Store<IDemoApplicationState> {
	const middlewares = applyMiddleware(sagaMiddleware); // Create Store
	const store = createStore(rootDemoReducer, initialState, middlewares);
	sagaMiddleware.run(rootDemoSaga);
	return store;
}
