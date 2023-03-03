const mongoose  = require('mongoose');
const {Student} = require('../models/student');
const _ = require('lodash')
const router = require('express').Router();

router.post('/', async (req, res) =>{
    let student = new Student(req.body);
    let valid_err = student.validateData(req.body);
    if(valid_err)
        return res.status(400).send(valid_err.message);
    try {
        student = await student.save();
    } catch (error) {
        return res.status(400).send(error.message);
    }
    
    res.status(201).send(student);
})

router.get('/', async (req, res) =>{
    let students = await Student.find();
    res.setHeader('numberOfElmts',students.length).status(200).send(students);
})

router.get('/id/:id', async (req, res) =>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send('The id is not a mongo db valid id.')
    let student = await Student.findById(req.params.id);
    if(!student)
        return res.status(404).send('The student id not found.')
    res.status(200).send(student);
})

router.get('/active/:active', async (req, res) =>{
    let students = await Student.find({active : req.params.active})
    if(students.length==0)
        return res.status(404).send('The students with this criteria is not found.')
    res.status(200).send(students);
})

router.get('/age/between/:min/:max', async (req, res) =>{
    let students = await Student.find({age : {$gte : req.params.min, $lt:req.params.max}})
    if(students.length==0)
        return res.status(404).send('The students with this criteria is not found.')
    res.status(200).send(students);
})

router.put('/id/:id', async (req, res) =>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send('The id is not a mongo db valid id.')
    let student = await Student.findById(req.params.id);
    if(!student)
        return res.status(404).send('The student id not found.')
    student = _.merge(student,req.body);
    student = await student.save();
    res.status(200).send(student);
})

router.delete('/id/:id', async (req, res) =>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(400).send('The id is not a mongo db valid id.')
    let student = await Student.findByIdAndDelete(req.params.id);
    if(!student)
        return res.status(404).send('The student id not found.')
    res.status(200).send(student);
})

module.exports=router;
