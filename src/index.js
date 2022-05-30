import React from "react"
import ReactDOM from "react-dom"

//Component File
import TodoContainer from "./functionBased/components/TodoContainer"

//Stylesheets
import "./functionBased/App.css"

ReactDOM.render(
	<React.StrictMode>
		<TodoContainer />
	</React.StrictMode>, 
	document.getElementById("root")
)