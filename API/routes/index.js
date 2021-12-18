const express = require('express');
const router = express.Router();
const todoListController = require('../controllers/todoController');

module.exports = function(){

    //agrega nuevas task via POST
    router.post('/newtask',
        todoListController.nuevaTarea
    );

    //obtiene todos los registros de las tasks
    router.get('/todoList',
        todoListController.obtenerListaTareas
    )

    //obtiene task por su ID
    router.get('/todoList/:id',
        todoListController.obtenerTarea
    )

    //update task por su ID
    router.put('/todoList/:id',
        todoListController.actualizarTask
    )

    //delete task por su ID
    router.delete('/todoList/:id',
        todoListController.eliminarTask
    )

    return router;
}