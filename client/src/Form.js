import React from 'react';
import './Form.css';


class Form extends React.Component {

	render() {

		let state = this.props.prev;

		let previewState = (state.preview === true) ? "preview-open" : "preview-closed";
		let toggleState = (state.preview === true) ? "Close preview" : "Preview message";

		return (
			<section className={`form-input ${previewState}`}>
				<h4>Get in touch</h4>
				<form id='input-form' method='POST'>
					<label>Name:
						<input name='name' type='text' onChange={this.props.handleChange} value={state.name} />
						<div id='error-name' className='error-report'>

						</div>
					</label>
					<label>Email:
						<input name='email' type='email' onChange={this.props.handleChange} value={state.email} />
						<div className='error-report'>

						</div>
					</label>
					<label>Tel:
						<input name='number' type='number' onChange={this.props.handleChange} value={state.number}/>
						<div className='error-report'>

						</div>
					</label>
					<label>Message:
						<textarea name='message' rows='2' cols='20' onChange={this.props.handleChange} value={state.message} />
						<div className='error-report'>

						</div>
					</label>
					<div className='form-button-wrap'>
						<input type='submit' value='Send' onClick={this.props.handleSubmit}/>
						<button type='button' onClick={this.props.togglePreview}>{toggleState}</button>
					</div>
				</form>
				
			</section>
		);
	}
}

export default Form;