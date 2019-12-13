const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const config = require('config');
const User = require('../models/User');

/**
 * @route POST api/auth
 * @desc   Login a user and get Token
 * @access Private
 */
router.post(
	'/',
	[
		check('email', 'Please include a valid email address').isEmail(),
		check('password', 'Password is required').exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (!user) {
				res.status(400).json({ message: 'Invalid Credentials' });
			}
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.status(400).json({ message: 'Invalid Credentials' });
			}
			const payload = {
				user: {
					id: user.id,
				},
			};
			jwt.sign(
				payload,
				config.get('JWT_SECRET'),
				{
					expiresIn: 360000,
				},
				(err, token) => {
					if (err) throw error;
					res.json({ token });
				}
			);
		} catch (error) {
			console.log(error.message);
			res.status(500).send('something went wrong');
		}
	}
);

/**
 * @route GET api/auth
 * @desc  get loggedin user
 * @access Private
 */
router.get('/', (req, res) => {
	res.send('register a user');
});
module.exports = router;
