import React from 'react';
import './FormPreview.css';

function FormPreview(props) {

	let previewInfo = (
		props.prev.name ||
		props.prev.email ||
		props.prev.number ||
		props.prev.message) === null ? <p id='preview-info'>A preview of your message will appear below:</p> : null;

	let toggle = (props.prev.preview === true) ? "showing" : "hidden";

	return (
		<section className={`form-preview ${toggle}`}>
			<h4>Preview</h4>
			<article className='preview-contents'>
				{previewInfo}
				<div className='preview-entry' id='preview-name'>
					{props.prev.name}
				</div>
				<div className='preview-entry' id='preview-email'>
					{props.prev.email}
				</div>
				<div className='preview-entry' id='preview-number'>
					{props.prev.number}
				</div>
				<div className='preview-entry' id='preview-message'>
					{props.prev.message}
				</div>
			</article>
		</section>
	);
}

export default FormPreview;