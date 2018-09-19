import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import indexRoutes from "./routes/index.jsx";

import "./assets/scss/material-kit-react.css";

var hist = createBrowserHistory();

const App = (
	<h1>Hola soy React</h1>
);

ReactDOM.render(
	<div>
		<h1>Hola</h1>
	</div>
	,
  document.getElementById("root")
);
