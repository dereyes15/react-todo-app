import React from "react"

//styles
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
	render() {
		return(
			<li className={styles.item}> 
				<input 
					className={styles.checkbox}
					type="checkbox" 
					checked={this.props.todo.completed}
					onChange={() => this.props.handleChangeProps(this.props.todo.id)} 
				/>
				<button 
				onClick={() => this.props.deleteTodoProps(this.props.todo.id)}
				> 
					Delete 
				</button>
				{this.props.todo.title} 
			</li>
		)
	}
}

export default TodoItem