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
							<h1 className="truncate inline-block  font-Poppins tracking-ini text-2xl">WELCOME TO</h1>
						</div>
						<div className="flex cont-text">
							<div className="">
								<img className="w-full h-full" src="/images/Plant.png" alt="" />
							</div>
							<div className="flex items-end ">
								<img className="h-1/2 vsimg" src="/images/Vs.png" alt="" />
							</div>
							<div className="anim">
								<ul>
									<li>
										<img className="img-ini" src="/images/Undead.png" alt="" />
									</li>
									<li>
										<img className="img-ini" src="/images/Tracking.png" alt="" />
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
