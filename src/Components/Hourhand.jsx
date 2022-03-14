import moment from "moment";
import React, { useState, useEffect, Fragment, useRef, useCallback } from "react";
import countrysJson from "./../assets/jsons/Countrys.json";
import ReactTooltip from "react-tooltip";
import { Dialog, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";

// hooks react redux
/* useDispatch= llamada de accion, useSelector= llamada de states */
import { useDispatch, useSelector } from "react-redux";

// importamos la acción
import { GetGeolocationData, StoreSetCountry } from "../Redux/plantsDucks";

export function Hourhand() {
	const dispatch = useDispatch();
	const plants = useSelector((store) => store.plants);
	const initHour = "16:55:03";
	const initGroup = 4;
	const totalGroup = 10;
	const initMinInterval = 30;

	const [group, setGroup] = useState([]);

	var intervalStopAux = useRef(0);
	useEffect(() => {
		dispatch(GetGeolocationData());
		// eslint-disable-next-line
	}, []);
	const divideGroups = (gr) => {
		let TotalGroup = [];
		for (let index = 1; index < totalGroup + 1; index++) {
			var Groups = gr.filter((group) => group.groupNumber === index);
			TotalGroup.push(Groups);
			if (index === totalGroup) setGroup(TotalGroup);
		}
	};

	const getDate = useCallback(() => {
		var dateUtc = moment().utc().format("HH:mm:ss");
		let difHour = localStorage.getItem("Country") ? parseInt(countrysJson[localStorage.getItem("Country")]) : parseInt(countrysJson[plants.geolocationData.country]);
		let newDate = moment(dateUtc, "HH:mm:ss").add(difHour, "hours").format("HH:mm:ss");

		return newDate;
	}, [plants.geolocationData.country]);

	const UpdateStatus = useCallback(
		(temporaryGroup) => {
			const promises = temporaryGroup.map(async (gr) => {
				var entry = moment(gr.entrada, "HH:mm:ss");
				let actualTime = moment(getDate(), "HH:mm:ss");
				let diffMin = actualTime.diff(entry, "minutes");
				let diffSec = actualTime.diff(entry, "seconds");
				let diffMilSec = actualTime.diff(entry, "milliseconds");

				if (moment(gr.entrada, "HH:mm:ss").format("HH") === "23" && moment(actualTime, "HH:mm:ss").format("HH") === "00") {
					diffMin = 1440 - Math.abs(diffMin);
					diffSec = 86400 - Math.abs(diffSec);
					diffMilSec = 86400000 - Math.abs(diffMilSec);
				}

				if (diffMin >= 0 && diffMin <= initMinInterval && diffSec >= 0 && diffSec <= initMinInterval * 60 && diffMilSec >= 1 && diffMilSec <= initMinInterval * 60 * 1000) {
					gr.status = true;
				} else {
					gr.status = false;
				}
				return gr;
			});
			return Promise.all(promises);
		},
		[getDate]
	);

	const UpdateGroup = useCallback(
		(initHourCountry) => {
			let initGroupTemp = 1;
			let count = 1;
			let newInitHour;
			var prev;

			if (initGroup !== 1) {
				prev = moment(initHourCountry, "HH:mm:ss")
					.subtract((initGroup - 1) * initMinInterval, "minutes")
					.format("HH:mm:ss");
			} else {
				prev = initHourCountry;
			}

			newInitHour = prev;
			let next;

			let temporaryGroup = [{ groupNumber: initGroupTemp, entrada: prev, status: false }];

			while (next !== newInitHour && moment(prev, "HH:mm:ss").add(initMinInterval, "minutes").format("HH:mm:ss") !== newInitHour) {
				next = moment(prev, "HH:mm:ss").add(initMinInterval, "minutes").format("HH:mm:ss");

				count++;
				if (count === totalGroup + 1) count = 1;
				temporaryGroup.push({ groupNumber: count, entrada: next, status: false });
				prev = next;

				if (moment(prev, "HH:mm:ss").add(initMinInterval, "minutes").format("HH:mm:ss") === newInitHour) {
					UpdateStatus(temporaryGroup).then((value) => divideGroups(value));

					var stopIntervalLocal = setInterval(() => {
						UpdateStatus(temporaryGroup).then((value) => divideGroups(value));
					}, 1000);

					intervalStopAux.current = stopIntervalLocal;
				}
			}
			return UpdateStatus;
		},
		[UpdateStatus]
	);

	useEffect(() => {
		let difHour;
		// Se obtiene la geolocalizacion
		if (plants.geolocationData.country) difHour = localStorage.getItem("Country") ? parseInt(countrysJson[localStorage.getItem("Country")]) : parseInt(countrysJson[plants.geolocationData.country]);

		// Seleccion de pais
		if (plants.countryStore) difHour = parseInt(countrysJson[plants.countryStore]);

		// moment(initHour, "HH:mm:ss").add(difHour, "hours").format("HH:mm:ss");
		if (plants.geolocationData.country || plants.countryStore) UpdateGroup(moment(initHour, "HH:mm:ss").add(difHour, "hours").format("HH:mm:ss"));

		return () => {
			clearInterval(intervalStopAux.current);
		};
	}, [plants.geolocationData.country, plants.countryStore, intervalStopAux, UpdateGroup]);

	return (
		<>
			<div className="w-4/5 mx-auto bg-secondary rounded-xl shadow-md overflow-hidden mb-24">
				<div className="shadow-lg justify-center items-center">
					<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-10">
						{group.map((g, index) => (
							<Group key={index} lote={g}></Group>
						))}
					</div>
				</div>
			</div>
			<Modal></Modal>
		</>
	);
}

const Group = ({ lote }) => {
	return (
		<>
			<div className="relative">
				<div className="shadow-lg bg-white w-full rounded-xl overflow-hidden">
					<div className="bg-bg-2 py-2 text-center text-xl font-extrabold truncate">Grupo {lote[0].groupNumber}</div>
					<div className="bg-madera bg-center bg-no-repeat bg-cover text-text-2 text-xl p-4 font-extrabold">
						{lote.map((l, index) => (
							<div key={index} className="relative w-min mx-auto">
								{l.status ? <img className="babycrow absolute w-6 top-0 -mr-1 -mt-1 -right-5" src="/images/babycrow.png" alt="" /> : false}
								<h1 className="truncate inline-block time__text font-LuckiestGuy tracking-time text-2xl">{l.entrada}</h1>
							</div>
						))}
					</div>
				</div>
				{lote.map((l, index) => (l.status ? <div key={index} className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-primary animate-ping"></div> : false))}
				{lote.map((l, index) => (l.status ? <div key={index} className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-primary"></div> : false))}
			</div>
		</>
	);
};

const Modal = () => {
	const dispatch = useDispatch();
	const plants = useSelector((store) => store.plants);
	const [country, setCountry] = useState();
	useEffect(() => {
		if (!plants.geolocationData.country) return;
		let c = localStorage.getItem("Country") ? localStorage.getItem("Country") : plants.geolocationData.country;
		setCountry(c);
	}, [plants.geolocationData]);

	const [open, setOpen] = useState(false);

	const cancelButtonRef = useRef(null);

	const ChangeCountry = (selectCountry) => {
		localStorage.setItem("Country", selectCountry);
		dispatch(StoreSetCountry(selectCountry));
		setCountry(selectCountry);
	};

	const [searchTerm, setSearchTerm] = useState("");

	/*  let searchCountryInput = React.createRef();
	 	let searchValue = searchCountryInput.current.value;
		In the input = ref={searchCountryInput} */
	return (
		<>
			<img
				onClick={() => setOpen(true)}
				src={`/images/CountryFlags/Points/${country}.svg`}
				id="countryImg"
				className="right-10 bottom-10 h-20 w-20 fixed cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
				alt=""
			/>
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="inline-block align-bottom bg-bg-2 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
								<div className="bg-bg-2 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									{/* Contenedor */}
									<div className="sm:flex sm:items-start">
										<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
											<Dialog.Title as="h3" className="text-lg leading-6 font-medium text-white">
												Select Country
											</Dialog.Title>
											<div className="mt-0">
												<div className="p-8">
													<div className="bg-secondary flex items-center rounded-full shadow-xl">
														<input
															onChange={(event) => {
																setSearchTerm(event.target.value);
															}}
															className="rounded-l-full w-full py-4 px-6 text-white leading-tight focus:outline-none bg-secondary"
															id="search"
															type="text"
															placeholder="Search"
															label="searchCountry"
														/>

														<div className="p-4">
															<button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
																<SearchIcon className="h-6 w-6 " aria-hidden="true" />
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id="global" className="w-auto h-80 overflow-y-scroll">
										<div className="grid sm:grid-cols-2 md:grid-cols-4 h-auto">
											{Object.keys(countrysJson) // eslint-disable-next-line
												.filter((val) => {
													if (searchTerm === "") {
														return val;
													} else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
														return val;
													}
												})
												.map((g, index) => (
													<div
														key={index}
														className="transition-all relative cursor-pointer text-center justify-center items-center flex countryFlags"
														data-tip={g}
														id={g}
														onClick={() => ChangeCountry(g)}
													>
														<img className="w-20 z-0" src={`/images/CountryFlags/Flags/${g}.svg`} alt="" />

														<div className={g === country ? "visible" : "hidden"}>
															<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute z-10 top-0 right-0" fill="none" viewBox="0 0 24 24" stroke="green">
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
															</svg>
														</div>

														<ReactTooltip />
													</div>
												))}
										</div>
									</div>
								</div>
								<div className="bg-secondary px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
									<button
										type="button"
										className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => setOpen(false)}
									>
										accept
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
};
