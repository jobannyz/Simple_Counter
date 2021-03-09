//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function Simplecounter(props) {
	return (
		<div className="MyContainer">
			<p>
				<div className="fas fa-clock"></div>
				<div className="six">{props.posicion6 % 10}</div>
				<div className="five">{props.posicion5 % 10}</div>
				<div className="four">{props.posicion4 % 10}</div>
				<div className="three">{props.posicion3 % 10}</div>
				<div className="two">{props.posicion2 % 10}</div>
				<div className="one">{props.posicion1 % 10}</div>
			</p>
		</div>
	);
}

Simplecounter.propTypes = {
	posicion1: propTypes.number,
	posicion2: propTypes.number,
	posicion3: propTypes.number,
	posicion4: propTypes.number,
	posicion5: propTypes.number,
	posicion6: propTypes.number
};

let counter = 0;
setInterval(function() {
	const sixth = Math.floor(counter / 100000);
	const fifth = Math.floor(counter / 10000);
	const fourth = Math.floor(counter / 1000);
	const third = Math.floor(counter / 100);
	const second = Math.floor(counter / 10);
	const first = Math.floor(counter / 1);
	counter++;

	ReactDOM.render(
		<Simplecounter
			posicion1={first}
			posicion2={second}
			posicion3={third}
			posicion4={fourth}
			posicion5={fifth}
			posicion6={sixth}
		/>,
		document.querySelector("#app")
	);
}, 1000);
