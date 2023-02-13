const express = require('express')
require('./db/connect')
const app = express()
const port = 3000

app.listen(port, () => console.log(`Students app listening on port ${port}!`))