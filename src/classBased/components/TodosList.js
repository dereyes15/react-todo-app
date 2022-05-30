import React from "react"
import TodoItem from "./TodoItem"

class TodosList extends React.Component {
	render() {
		const { todos } = this.props
		return(
			<ul>
				{todos.map(todo => (
					<TodoItem 
						key={todo.id} 
						todo={todo} 
						handleChangeProps={this.props.handleChangeProps}
						editTodoProps={this.props.editTodoProps}
						deleteTodoProps={this.props.deleteTodoProps}
					/>
				))}
			</ul>
		)
	}
}

export default TodosList