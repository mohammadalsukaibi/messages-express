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

// add message route
router.post('/new', (req, res) => {
    messages.push({name: req.body.user, message: req.body.message})
    res.redirect('/')
})


module.exports = router;