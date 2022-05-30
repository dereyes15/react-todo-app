import React from "react"
import ReactDOM from "react-dom"

//Component File
import TodoContainer from "./components/TodoContainer"

//Stylesheets
import "./App.css"

ReactDOM.render(
	<React.StrictMode>
		<TodoContainer />
	</React.StrictMode>, 
	document.getElementById("root")
)