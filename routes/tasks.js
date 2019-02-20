'use strict';
const express = require('express')
const router = express.Router()


    const todoList = require('../controllers/taskController');

    // todoList Routes

        router.get('/tasks', todoList.list_all_tasks)
        router.post('/tasks', todoList.create_a_task)


        router.get('/tasks/:taskId', todoList.read_a_task)
        router.put('/tasks/:taskId', todoList.update_a_task)
        router.delete('/tasks/:taskId', todoList.delete_a_task)
module.exports = router
