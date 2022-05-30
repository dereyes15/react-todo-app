import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {
	state = {
		todos: [
			{
				id: 1,
				title: "Setup development environment",
				completed: true
			},
			{
				id: 2,
				title: "Develop website and add content",
				completed: false
			},
			{
				id: 3,
				title: "Deploy to live server",
				completed: false
			}
		]
	}

	handleChange = (id) => {
		this.setState(prevState => ({
			todos: prevState.todos.map(todo => {
				if(todo.id === id){
					return {
						...todo,
						completed: !todo.completed, 
					}
				}
				return todo
			})
		}))
	};

	addTodo = title => {
		const newTodo = {
			id: this.state.todos.length + 1,
			title: title, 
			completed: false
		};
		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	};

	editTodo = (updatedTitle, id) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if(todo.id === id){
					todo.title = updatedTitle
				}
				return todo
			}),
		})
	}

	deleteTodo = id => {
		this.setState({
			todos: [
				...this.state.todos.filter(todo => {
					return todo.id !== id;
				})
			]
		});
	};

	render() {
		const { todos } = this.state

		return(
			<div className="container">
				<div className="inner"> 
					<Header />
					<InputTodo addTodoProps={this.addTodo} />
					<TodosList 
						todos={todos}
						handleChangeProps={this.handleChange} 
						editTodoProps={this.editTodo}
						deleteTodoProps={this.deleteTodo}
					/>
				</div>	
			</div>
		)
	}
}
export default TodoContainer