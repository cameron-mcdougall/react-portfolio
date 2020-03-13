import React from 'react';
import './Contact.css';
import axios from 'axios';
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
		this.togglePreview = this.togglePreview.bind(this);
		this.resetForm = this.resetForm.bind(this);

	}

	updateInputChange(event) {

		const value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});

	}

	handleSubmit(event) {

		event.preventDefault();
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
		
	}

	resetForm(){
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
			<section className='form-wrap'>
				<Form
					prev={this.state.preview}
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