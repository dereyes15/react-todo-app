import React from "react"
import ReactDOM from "react-dom"

//Component File
import TodoContainer from "./components/TodoContainer"
ReactDOM.render(
	<React.StrictMode>
		<TodoContainer />
	</React.StrictMode>, 
	document.getElementById("root")
)