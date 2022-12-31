import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import PostListContainer from "./containers/postListContainer";
import configureStore from "./state";
import {configureDemoStore} from "./state/configureStore.dev"
const initialState = (window as any).initialReduxState;
const store = configureDemoStore(initialState);
const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PostListContainer />
		</Provider>
	);
};
export default App;
