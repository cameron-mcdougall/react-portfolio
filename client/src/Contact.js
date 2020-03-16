import React from 'react';
import './Contact.css';
import axios from 'axios';
import Form from './Form';
import FormPreview from './FormPreview';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
	let valid = true;
	Object.values(errors).forEach(
		// If an error string exists, set valid to false
		(val) => val.length > 0 && (valid = false)
	);
	return valid;	
}

class Contact extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: null,
			email: null,
			number: null,
			message: null,
			preview: false,
			errors: {
				name: '',
				email: '',
				number: '',
				message: ''
			}
		};

		this.updateInputChange = this.updateInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.togglePreview = this.togglePreview.bind(this);
		this.resetForm = this.resetForm.bind(this);

	}

	updateInputChange(event) {

		const { name, value } = event.target;
		let errors = this.state.errors;

		switch(name) {
			case 'name':
				errors.name = value.length < 3 ? 'Name must be at least 3 characters long' : '';
			break;
			case 'email':
				errors.email = validEmailRegex.test(value) ? '' : 'Not a valid email address';
			break;
			case 'number':
				errors.number = value.length < 11 ? 'Must contain at least 11 numbers' : '';
			break;
			case 'message':
				errors.message = value.length > 500 ? 'Too many characters, please keep your message under 500 characters' : '';
			break;
			default:
				break;
		}

		this.setState({
			errors, [name]: value
		});

	}

	handleSubmit(event) {

		event.preventDefault();

		if (validateForm(this.state.errors)) {
			console.info('Valid Form');
			axios({
			method: 'POST',
			url: 'http:\//localhost:5000/send',
			data: {
				name: this.state.name,
				email: this.state.email,
				number: this.state.number,
				message: this.state.message 
			}
		}).then((response) => {
			if (response.data.msg === 'success') {
				alert('Email sent, awesome!');
				this.resetForm()
			} else if (response.data.msg === 'fail') {
				alert('Oops, something went wrong. Try again')
			}
		})
		} else {
			console.error('Invalid Form')
		}
		
	}

	resetForm(){
			this.setState({
				name: null,
				email: null,
				number: null,
				message: null
			})
		}

	togglePreview(event) {

		(this.state.preview === true) ? this.setState({preview: false}) : this.setState({preview: true})

	}

	render() {
		return (
			<section className='form-wrap'>
				<Form
					prev={this.state}
					handleChange={this.updateInputChange.bind(this)}
					handleSubmit={this.handleSubmit.bind(this)} 
					togglePreview={this.togglePreview.bind(this)}
				/>
				<FormPreview prev={this.state} />
			</section>
		);
	}
}

export default Contact;