import React from 'react';
import './Form.css';


class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Name',
		};

		this.updateInputChange = this.updateInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	updateInputChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	handleSubmit(event) {
		alert('Info recieved: ' ${this.state.value});
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			</form>
		);
	}
}