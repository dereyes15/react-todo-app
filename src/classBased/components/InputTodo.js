import React, { Component } from "react"

class InputTodo extends Component {
	state = {
		title: ""
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if(this.state.title.trim()) {
			this.props.addTodoProps(this.state.title);
			this.setState({
				title:""
			});
		} else {
			alert("Well, this is awkward... think you need to input something")
		}
	};

	render() {
		const { title } = this.state

		return(
			<form className="form-container" onSubmit={this.handleSubmit}>
				<input 
					className="input-text"
					type="text"
					name="title"
					placeholder="What's your next to-do? ..." 
					value={title}
					onChange={this.onChange}
				/>
				<button className="input-submit">Submit</button>
			</form>
		)
	}
}

export default InputTodo