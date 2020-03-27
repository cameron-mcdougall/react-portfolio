import React from 'react';
import RecaptchaTestComponent from './RecaptchaTestComponent';
import './Form.css';


class Form extends React.Component {

	render() {

		let state = this.props.prev;
		let { errors } = state;

		let previewState = (state.preview === true) ? "preview-open" : "preview-closed";
		let toggleState = (state.preview === true) ? "Close preview" : "Preview message";

		return (
			<section className={`form-input ${previewState}`}>
				<h4>Get in touch</h4>
				<form id='input-form' method='POST'>
					<label>Name*:
						<input name='name' type='text' onChange={this.props.handleChange} value={state.name} required />
						{errors.name.length > 0 &&
								<div className='error-report'>{errors.name}</div>}
	
					</label>
					<label>Email*:
						<input name='email' type='email' onChange={this.props.handleChange} value={state.email} required />
						{errors.email.length > 0 &&
								<div className='error-report'>{errors.email}</div>}

					</label>
					<label>Tel*:
						<input name='number' type='number' onChange={this.props.handleChange} value={state.number} required/>
						{errors.number.length > 0 &&
								<div className='error-report'>{errors.number}</div>}

					</label>
					<label>Message*:
						<textarea name='message' rows='2' cols='20' onChange={this.props.handleChange} value={state.message} required />
						{errors.message.length > 0 &&
								<div className='error-report'>{errors.message}</div>}

					</label>
					<div className='form-button-wrap'>
					<RecaptchaTestComponent />
						<input type='submit' value='Send' onClick={this.props.handleSubmit}/>
								<div className='error-report'>{errors.submit}</div>
						<button type='button' onClick={this.props.togglePreview}>{toggleState}</button>
					</div>
				</form>
				
			</section>
		);
	}
}

export default Form;