import React from "react";
import "./assets/scss/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import generateStore from "./Redux/store";

import Inicio from "./Components/Inicio";
import Appp from "./Components/App";

function App() {
	const store = generateStore();
	return (
		<div className="h-auto">
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path="/">
							<Inicio />
						</Route>
						<Route path="/app">
							<Appp />
						</Route>
					</Switch>
				</Router>
			</Provider>
		</div>
	);
}
export default App;
