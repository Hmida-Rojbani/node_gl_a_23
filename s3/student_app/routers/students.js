const express = require('express');
const router = express.Router();
const {student_schema,student_update_schema} = require('../models/student')

let students = [
    {id:1, name:'student 1', class: 'Class A'},
    {id:2, name:'student 2', class: 'Class B'},
    {id:3, name:'student 3', class: 'Class B'},
    {id:4, name:'student 4', class: 'Class A'}
];


router.get('', (req, res) => {
  res.send(students);
});

router.get('/:stdId', (req, res) => {
    console.log(req.ali);
    let student = students.find(std => std.id === parseInt(req.params.stdId))
    if (!student)
        return res.status(404).send('student with given id not found.')
  res.send(student)
});

router.post('', function (req, res) {
    let validation_res = student_schema.validate(req.body);
    if(validation_res.error)
        return res.status(400).send(validation_res.error.message);
  let student = {
    id : students.length+1,
    name : req.body.name,
    class : req.body.class
  };
  students.push(student);
  res.status(201).send(student);
});
router.put('/:stdId', (req, res) => {
    let validation_res = student_update_schema.validate(req.body);
    if(validation_res.error)
        return res.status(400).send(validation_res.error.message);
    let student = students.find(std => std.id === parseInt(req.params.stdId))
    if (!student)
        return res.status(404).send('student with given id not found.');
    if (req.body.name) {
        student.name=req.body.name
    }
    if (req.body.class) {
        student.class=req.body.class
    }
  res.send(student)
});

router.delete('/:stdId', (req, res) => {
    let student = students.find(std => std.id === parseInt(req.params.stdId))
    if (!student)
        return res.status(404).send('student with given id not found.')
    students = students.filter(std => std.id !== parseInt(req.params.stdId))
  res.send(student)
});

module.exports=router