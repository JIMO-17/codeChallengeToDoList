const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
    nombre_tarea: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: Boolean,
        trim: true
    }
});

module.exports = mongoose.model('Task', todoListSchema);