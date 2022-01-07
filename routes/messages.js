const express = require('express');
const router = express.Router();
const messages = require('../Messages')

// get all messages
router.get('/', (req, res) => {
    res.json(messages)
})

// get single message
router.get('/:id', (req, res) => {
    res.json(messages.filter(message => message.id === parseInt(req.params.id) ))
})

// add message
router.post('/', (req, res) => {
    messages.push(req.body)
    res.json(messages)
})

module.exports = router;