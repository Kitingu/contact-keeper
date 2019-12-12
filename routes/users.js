const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.post(
	'/',
	[
		check('name', 'Name is required')
			.not()
			.isEmpty(),
		check('email', 'Please provide a valid email')
			.not()
			.isEmail(),
		check(
			'password',
			'Please provide password with 6 or more characters'
		).isLength({ min: 6 }),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		res.json({message:'we are past errors'});
	}
);

module.exports = router;
