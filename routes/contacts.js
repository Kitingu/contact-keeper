const express = require('express');
const router = express.Router();

/**
 * @route POST api/contact
 * @desc   Register a contact
 * @access Private
 */
router.post('/', (req, res) => {
	res.send('register a contact');
});

/**
 * @route GET api/contacts
 * @desc   Register a contact
 * @access Private
 */
router.get('/', (req, res) => {
	res.send('get a contact');
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
