import React from 'react';
import './Contact.css';
import Form from './Form';
import FormPreview from './FormPreview';

class Contact extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			number: '',
			message: '',
			preview: false
		};

		this.updateInputChange = this.updateInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	updateInputChange(event) {
		/*this.setState({
			name: event.target.value
		});*/

		const value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});

	}

	handleSubmit(event) {
		alert('Info recieved: ' + this.state.name);
		event.preventDefault();
	}

	render() {
		return (
			<section className='form-wrap'>
				<Form
					handleChange={this.updateInputChange.bind(this)}
					handleSubmit={this.handleSubmit.bind(this)} 
				/>
				<FormPreview prev={this.state} />
			</section>
		);
	}
}

export default Contact;