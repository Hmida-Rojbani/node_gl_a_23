const express = require('express');
const student_router = require('./routers/students')
const Welcome_router = require('./routers/welcome')
const app = express()
const port = 3000;
app.use(express.json())
app.use('/api/welcome',Welcome_router)
app.use('/api/students',student_router);
app.listen(port, () => console.log(`Student app listening on port ${port}!`))