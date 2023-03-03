const mongoose = require('mongoose')
const Joi = require('joi')
const uniqueValidator = require('mongoose-unique-validator');

const student_schema = new mongoose.Schema({
    name : {
        type:String,
        minLength : 3,
        maxLength : 50,
        required : true
    },
    inscriptionDate : {
        type: Date,
        default : Date.now()
    },
    age: {
        type : Number,
        required:true,
        min : 18
    },
    active: Boolean,
    payedAmount : {
        type :Number,
        required : function () {
            return this.active
        }
    },
    email : {
        type:String,
        unique : true,
        required : true
    }
});
student_schema.plugin(uniqueValidator);
const validation_schema = Joi.object({
    name : Joi.string().min(3).max(50).required(),
    inscriptionDate : Joi.date().iso(),
    age : Joi.number().integer().min(18),
    active : Joi.boolean(),
    payedAmount : Joi.number().positive(),
    email : Joi.string().email().required()
});

student_schema.methods.validateData =  function (data) {
    return validation_schema.validate(data).error;
}

const Student = mongoose.model('Student',student_schema);

module.exports.Student= Student;