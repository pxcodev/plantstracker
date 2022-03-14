import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import { Hourhand } from "./Hourhand";
import { FarmSimulator } from "./FarmSimulator";
import Calculator from "./Calculator";
import Setting from "./Setting";
import Time from "./Time";

export default function App() {
	let { path } = useRouteMatch();
	//let { topicId } = useParams();
	return (
		<div className="flex h-auto">
			<Sidebar />
			<div className="w-full content">
				<Time />
				<Switch>
					<Route exact path={path}>
						<Redirect to={`${path}/Hourhand`} />
					</Route>
					<Route path={`${path}/Hourhand`} component={Hourhand} />
					<Route path={`${path}/FarmSimulator`} component={FarmSimulator} />
					<Route path={`${path}/Calculator`} component={Calculator} />
					<Route path={`${path}/Setting`} component={Setting} />
				</Switch>
			</div>
		</div>
	);
}
