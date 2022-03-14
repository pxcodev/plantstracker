import React, { Component } from "react";
import "./../assets/scss/Time.scss";
import moment from "moment";
export default class Time extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: this.getDate(),
		};
	}
	getDate() {
		var newdate = moment().utc();
		var date = {};
		date.hours = newdate.hours();
		date.minutes = newdate.minutes();
		date.seconds = newdate.seconds();
		date.fecha = newdate.format("dddd, MMMM Do YYYY");
		return date;
	}

	updateDate() {
		this.setState((prevState) => {
			// let date = Object.assign({}, prevState.date);
			/* Or */
			let date = { ...prevState.date };
			date = this.getDate();
			return { date };
		});
	}
	componentDidMount() {
		var that = this;
		setInterval(function () {
			that.updateDate();
		}, 1000);
	}

	render() {
		return (
			<div className="flex justify-end items-end mb-10 mr-10">
				<div className="Time">
					<Marker type="hours" time={this.state.date.hours} />
					<Marker type="minutes" time={this.state.date.minutes} />
					<Marker type="seconds" time={this.state.date.seconds} />
					<div className="text-overlay">
						<Timer type="hours" time={this.state.date.hours} />
						<Timer type="minutes" time={this.state.date.minutes} />
						<Timer type="seconds" time={this.state.date.seconds} />
					</div>
					<div className="absolute flex w-full justify-center items-center top-16">
						<h1>{this.state.date.fecha}</h1>
					</div>
				</div>
				<h1>UTC</h1>
			</div>
		);
	}
}

class Marker extends Component {
	render() {
		var measurement;
		switch (this.props.type) {
			case "hours":
				measurement = 24;
				break;
			case "minutes":
				measurement = 60;
				break;
			case "seconds":
				measurement = 60;
				break;
			default:
				break;
		}

		var offset = (this.props.time / measurement) * 100 + "%";
		var opacity = ((this.props.time / measurement) * 100) / 100;

		var columnClasses = "Column Column--" + this.props.type;
		var typeClasses = "Marker Marker--" + this.props.type;
		return (
			<div className={columnClasses}>
				<div className={typeClasses} style={{ height: offset, opacity: opacity }}></div>
			</div>
		);
	}
}

class Timer extends Component {
	render() {
		var time;
		if (this.props.time < 10) {
			time = "0" + this.props.time;
		} else {
			time = this.props.time;
		}
		return <div className={this.props.type}>{time}</div>;
	}
}
