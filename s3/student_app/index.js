const express = require('express');
const appDebugger= require('debug')('app:students:Debug')
const student_router = require('./routers/students')
const Welcome_router = require('./routers/welcome')
const config = require('config');
const morgan = require('morgan')
const app = express()
const port = 3000;
app.use(express.json())
appDebugger('Node Env :',app.get('env'));
appDebugger('Application name :',config.get('app.name'))
appDebugger('Application version :',config.get('app.version'))
appDebugger('DB :',config.get('DB'))
//console.log('Node Env :',process.env.NODE_ENV);
if(app.get('env')==='development')
    app.use(morgan('dev'))
app.use('/api/welcome',Welcome_router)
// app.use(function (req,res,next) {
//     console.log('I passed from here');
//     req.ali="good student"
//     next();

// })
app.use('/api/students',student_router);
app.listen(port, () => appDebugger(`Student app listening on port ${port}!`))