import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);
	const [contact, setContact] = useState({
		/**initial state */
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});
	const onChange = (e) => {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		contactContext.addContact(contact);
		// clear form after adding contact
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal',
		});
	};
	const { name, email, phone, type } = contact;
	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>Add Contact</h2>
			<input
				type='text'
				name='name'
				placeholder='Name'
                value={name}
                required
				onChange={onChange}
			/>
			<input
				type='email'
				name='email'
				placeholder='Email'
                value={email}
				onChange={onChange}
			/>
			<input
				type='text'
				name='phone'
				placeholder='Phone'
				value={phone}
				onChange={onChange}
			/>
			<h5>Contact Type</h5>
			<input
				type='radio'
				name='type'
				value='personal'
				onChange={onChange}
				checked={type === 'personal'}
			/>
			Personal{' '}
			<input
				type='radio'
				name='type'
				value='professional'
				onChange={onChange}
				checked={type === 'professional'}
			/>
			Professional{' '}
			<div>
				<input
					type='submit'
					value='Add Contact'
					className='btn btn-primary btn-primary'
				/>
			</div>
		</form>
	);
};

export default ContactForm;
