const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')


// server port number
const port = process.env.PORT || 5000

// import  routes
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const taskRouter = require('./routes/tasks')

// instiantiate express
const app = express()

// logrequests to console
app.use(logger('dev'))

// protect app with cors
app.use(cors())

//body parser
app.use(bodyParser.urlencoded({ extended: true}))

// parse application/json
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users/', usersRouter);
app.use('/todo/', taskRouter);

// erro handlers
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500 );
    res.json({
        error: {
            message: error.message
        }
    })
});

app.listen(port, ()=>{
    console.log(`server is running on port:`, port)
})
