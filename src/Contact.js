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
		this.togglePreview = this.togglePreview.bind(this);

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
		console.log(this.state);
		alert('Info recieved. Check console for results!');
		

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