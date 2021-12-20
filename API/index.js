const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

//create server
const app = express();

//enable public cors
app.use(cors());

//enable Cors private domain
/* const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitelist.some( dominio => dominio === origin);
        if(existe) {
            callback(null, true)
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}
app.use( cors(corsOptions) ); */

//conect to MongoDB
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:/TodoListChallengeDB', {
mongoose.connect('mongodb+srv://JimoTodoChallenge:JimoTodoChallenge@testtodochallenge.xv9gv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//enable body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//enable routing
app.use('/', routes());


//Port and start start server
app.listen(4000, () => {
    console.log('Server running in http://localhost:4000');
})

