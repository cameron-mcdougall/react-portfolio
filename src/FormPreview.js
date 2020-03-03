import React from 'react';
import './FormPreview.css';

function FormPreview(props) {
	return (
		<section className='form-preview'>
			<strong>Name:</strong> {props.prev.name}
			<strong>Email:</strong> {props.prev.email}
		</section>
	);
}

export default FormPreview;