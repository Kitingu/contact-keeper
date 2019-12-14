const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const verifyToken = require('../middlewares/jwt');
const { check, validationResult } = require('express-validator');
const config = require('config');
const User = require('../models/User');
/**
 * @route POST api/contact
 * @desc   Register a contact
 * @access Private
 */
router.post(
	'/',
	verifyToken,
	[
		check('name', 'Name is required')
			.not()
			.isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { name, email, phone, type } = req.body;
		try {
			const newContact = new Contact({
				name,
				email,
				phone,
				type,
				user: req.user.id,
			});
			const contact = await newContact.save();
			res.json(contact);
		} catch (error) {
			console.log(error.message);
			res.status(500).send('Something went wrong');
		}
	}
);

/**
 * @route GET api/contacts
 * @desc   Register a contact
 * @access Private
 */
router.get('/', verifyToken, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(contacts);
	} catch (error) {
		console.log(error.message);
		res.status(500).send('something went wrong');
	}
});

/**
 * @route PUT api/contacts
 * @desc   update a contact
 * @access Private
 */
router.put('/', (req, res) => {
	res.send('update a contact');
});

/**
 * @route DELETE api/contacts
 * @desc   delete a contact
 * @access Private
 */
router.delete('/', (req, res) => {
	res.send('delete a contact');
});

module.exports = router;
