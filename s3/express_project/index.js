const express = require('express');
const app = express();
const port = 3000;

app.get(['/','/index'], (req, res) => res.send('Hello World!'));
app.post('/',(req,res) => {
    res.status(201).send({'sendit': 'ByPost'});
})

app.put('/',(req,res) => {
    res.status(202).send('<h1>Bonjour GLSI</h1>');
})

app.delete('/',(req,res) => {
    res.status(206).send('This is delete test  ');
})
app.listen(port, () => console.log(`Frist app listening on port ${port}!`));