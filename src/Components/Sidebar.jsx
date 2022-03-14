import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { useRouteMatch } from "react-router-dom";
const SideBar = () => {
	let { path, url } = useRouteMatch();

	return (
		/* flex flex-col items-center justify-center relative */
		<aside className="bg-bg-1 shadow h-screen fixed">
			<div className="h-16 flex items-center justify-start">
				<Link to="/" className="h-6 w-6 mx-auto">
					<img className="h-6 w-6 mx-auto" src="/images/pvu-icon.svg" alt="Plants Tracker" />
				</Link>
			</div>
			<div className="flex items-center justify-center sideItems">
				<ul>
					<li className="hover:bg-secondary" data-tip="Hourhand">
						<Link to={`${url}/hourhand`} className="h-16 px-6 flex justify-center items-center w-full focus:text-orange-500">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						</Link>
					</li>
					<ReactTooltip />
					<li className="hover:bg-secondary" data-tip="Farm Simulator">
						<Link to={`${url}/FarmSimulator`} className="h-16 px-6 flex justify-center items-center w-full focus:text-orange-500">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						</Link>
					</li>
					<ReactTooltip />
					<li className="hover:bg-secondary" data-tip="Calculator">
						<Link to={`${url}/calculator`} className="h-16 px-6 flex justify-center items-center w-full focus:text-orange-500">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
								/>
							</svg>
						</Link>
					</li>
					<ReactTooltip />
					<li className="hover:bg-secondary" data-tip="Setting">
						<Link to={`${url}/Setting`} className="h-16 px-6 flex justify-center items-center w-full focus:text-orange-500">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
								/>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</Link>
					</li>
					<ReactTooltip />
				</ul>
			</div>
		</aside>
	);
};

export default SideBar;
