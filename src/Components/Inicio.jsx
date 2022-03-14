import React from "react";
import { Link } from "react-router-dom";
export default function Inicio() {
	return (
		<>
			<section className="hero-1 bg-home home  ">
				<div className="bg-overlay overflow-hidden bg-transparent">
					<div className="hero-1-bg"></div>
				</div>
				<div className="h-screen flex justify-center items-center">
					<div className="">
						<div>
							<h1 className="truncate inline-block  font-Poppins tracking-ini text-2xl Wel">WELCOME TO</h1>
						</div>
						<div className=" grid sm:grid-cols-1 md:grid-cols-6 max-w-5xl -gap-1">
							<div className="plant h-40 col-span-2 flex items-end ">
								<img className=" mx-auto" src="/images/Plant.png" alt="" />
							</div>
							<div className="vs md:h-40 flex items-end justify-center">
								<img className="md:w-2/3 sm:w/2" src="/images/Vs.png" alt="" />
							</div>
							<div className="overflow-hidden anim h-40 col-span-3 ">
								<ul>
									<li>
										<img className="w-4/5 mx-auto text-center" src="/images/Undead.png" alt="" />
									</li>
									<li>
										<img className="w-full mx-auto text-center" src="/images/Tracking.png" alt="" />
									</li>
								</ul>
							</div>
						</div>
						<div className="relative text-center mt-32">
							<Link to="/app/hourhand">
								<button className="btn__action btn__farm">GET INTO</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
