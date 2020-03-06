import React from 'react';
import './Form.css';


class Form extends React.Component {

	render() {
		return (
			<section className='form-input'>
				<h4>Get in touch</h4>
				<form onSubmit={this.handleSubmit}>
					<label>Name:
						<input name='name' type='text' onChange={this.props.handleChange} />
					</label>
					<label>Email:
						<input name='email' type='email' onChange={this.props.handleChange} />
					</label>
					<label>Tel:
						<input name='number' type='number' onChange={this.props.handleChange} />
					</label>
					<label>Message:
						<textarea name='message' rows='4' cols='20' onChange={this.props.handleChange} />
					</label>
					<input type='submit' value='Send' onClick={this.props.handleSubmit} />
				</form>
				<button>Preview</button>
			</section>
		);
	}
}

export default Form;