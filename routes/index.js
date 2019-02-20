'use strict';
const express = require('express')
const router = express.Router()

const auth = require('../controllers/authController');

//home or index route
router.get('/', (req, res) => {
    res.send('Hello world  app is running on http://localhost:3000/');
})

// auth Routes
router.post('/register', auth.register)
router.post('/login', auth.login)

module.exports = router
