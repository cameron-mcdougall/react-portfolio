import React from 'react';
import './Form.css';


class Form extends React.Component {

	render() {
		return (
			<section className='form-input'>
				<form onSubmit={this.handleSubmit}>
					<label>Name:
						<input name='name' type='text' onChange={this.props.handleChange} />
					</label>
					<label>Email:
						<input name='email' type='email'onChange={this.props.handleChange} />
					</label>
					<input type='submit' value='Send' onClick={this.props.handleSubmit} />
				</form>
			</section>
		);
	}
}

export default Form;