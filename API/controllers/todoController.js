const Task = require('../models/todoModel');

//create new task
exports.nuevaTarea = async (req, res, next) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.json({mensaje: 'Se creo una nueva tarea'});
    } catch (error) {
        console.log(error);
        next();
    }
}

//Todo List 
exports.obtenerListaTareas = async (req, res, next) => {
    try {
        const tasks = await Task.find({});
        res.json(tasks);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Task by ID
exports.obtenerTarea = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (error) {
        console.log(error);
        next();
    }
}

//actualizar un registro por su ID
exports.actualizarTask = async (req, res, next) => {
    try {
        const task = await Task.findOneAndUpdate({_id: req.params.id}, req.body, { new: true });
        res.json(task);
    } catch (error) {
        console.log(error);
        next();
    }
}

//eliminar una tarea
exports.eliminarTask = async (req, res, next) => {
    try {
        await Task.findOneAndDelete({_id: req.params.id});
        res.json({message: 'Tarea eliminada correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
}