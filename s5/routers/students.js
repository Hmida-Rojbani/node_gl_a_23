const mongoose  = require('mongoose');
const {Student} = require('../models/student');
const router = require('express').Router();

router.post('/', async (req, res) =>{
    let student = new Student(req.body);
    student = await student.save();
    res.status(201).send(student);
})

router.get('/', async (req, res) =>{
    let students = await Student.find();
    res.status(200).send(students);
})

router.get('/id/:id', async (req, res) =>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send('The id is not a mongo db valid id.')
    let student = await Student.findById(req.params.id);
    if(!student)
        return res.status(404).send('The student id not found.')
    res.status(200).send(student);
})

module.exports=router;
