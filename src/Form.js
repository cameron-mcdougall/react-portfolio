import React from 'react';
import './Form.css';


class Form extends React.Component {

	render() {

		let previewState = (this.props.prev === true) ? "preview-open" : "preview-closed";
		let toggleState = (this.props.prev === true) ? "Close preview" : "Preview message";

		return (
			<section className={`form-input ${previewState}`}>
				<h4>Get in touch</h4>
				<form onSubmit={this.handleSubmit} method='POST'>
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
					<div className='form-button-wrap'>
						<input type='submit' value='Send' onClick={this.props.handleSubmit} />
						<button type='button' onClick={this.props.togglePreview} >{toggleState}</button>
					</div>
				</form>
				
			</section>
		);
	}
}

export default Form;