import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {
	state = {
		todos: []
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

	componentDidMount() {
		const temp = localStorage.getItem("todos")
		const loadedTodos = JSON.parse(temp)
		
		if (loadedTodos) {
			this.setState({
				todos: loadedTodos
			})
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.todos !== this.state.todos) {
			const temp = JSON.stringify(this.state.todos)
			localStorage.setItem("todos", temp)
		}
	}

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