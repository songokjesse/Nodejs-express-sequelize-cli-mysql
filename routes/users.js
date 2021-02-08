'use strict';
const express = require('express')
const router = express.Router()


const userList = require('../controllers/usersController');
const JWTVerify = require('../middlewares/auth')

// userList Routes

router.get('/users',JWTVerify, userList.list_all_users)
router.post('/users', userList.create_a_user)


router.get('/users/:userId', userList.read_a_user)
router.put('/users/:userId', userList.update_a_user)
router.delete('/users/:userId', userList.delete_a_user)

module.exports = router
