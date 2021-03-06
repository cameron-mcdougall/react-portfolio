import React from 'react';
import './Contact.css';
import axios from 'axios';
import Form from './Form';
import FormPreview from './FormPreview';

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
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
			name: '',
			email: '',
			number: '',
			message: '',
			preview: true,
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
			url: 'http://localhost:5000/send',
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

		}
		
	}

	resetForm() {

		this.setState({
			name: '',
			email: '',
			number: '',
			message: ''
		})
		
	}

	togglePreview(event) {

		(this.state.preview === true) ? this.setState({preview: false}) : this.setState({preview: true})

	}

	render() {
		return (
			<React.Fragment>
				<section className='intro'>
					<p>I'm only ever a few keystrokes and one bot check away so feel free to send me a message if you'd be interested in working with me! I've included a message preview that was originally me flexing at ReactJS states but found it's actually quite nice for proofreading before sending! Fun, eh?</p>
				</section>
				<section className='form-wrap'>
					<Form
						prev={this.state}
						handleChange={this.updateInputChange.bind(this)}
						handleSubmit={this.handleSubmit.bind(this)} 
						togglePreview={this.togglePreview.bind(this)}
					/>
					<FormPreview prev={this.state} />
				</section>
			</React.Fragment>
		);
	}
}

export default Contact;