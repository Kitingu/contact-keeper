const express = require('express');
const router = express.Router();

/**
 * @route POST api/auth
 * @desc   Login a user and get Token
 * @access Private
 */
router.post('/', (req, res) => {
	res.send('register a user');
});

/**
 * @route GET api/auth
 * @desc  get loggedin user
 * @access Private
 */
router.get('/', (req, res) => {
	res.send('register a user');
});
module.exports = router;
