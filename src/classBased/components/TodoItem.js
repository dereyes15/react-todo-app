import React from "react"

//styles
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
	state = {
		editing: false,
	}

	handleEditing = () => {
		this.setState({
			editing: true,
		})
	}

	handleUpdatedDone = e => {
		if(e.key === "Enter") {
			this.setState({editing: false})
		}
	}

	componentWillUnmount() {
		console.log("Cleaning up...")
	}

	render() {
		const completedStyle = {
			fontStyle: "italic",
			color: "#595959",
			opacity: 0.4,
			textDecoration: "line-through",
		}

		const { editing } = this.state
		const { completed, id, title } = this.props.todo

		let viewMode = {}
		let editMode = {}

		if(editing) {
			viewMode.display = "none"
		} else {
			editMode.display = "none"
		}

		return(
			<li className={styles.item}> 
				<div style={viewMode} onDoubleClick={this.handleEditing}>
					<input 
						className={styles.checkbox}
						type="checkbox" 
						checked={completed}
						onChange={() => this.props.handleChangeProps(id)} 
					/>
					<button 
					onClick={() => this.props.deleteTodoProps(id)}
					> 
						Delete 
					</button>
					<span style={completed ? completedStyle : null}> 
						{title} 
					</span>
				</div>
				<input 
					type="text" 
					style={editMode} 
					className={styles.textInput} 
					value={title}
					onChange={e => {
						this.props.editTodoProps(e.target.value, id)
					}}
					onKeyDown={this.handleUpdatedDone}
				/>
			</li>
		)
	}
}

export default TodoItem