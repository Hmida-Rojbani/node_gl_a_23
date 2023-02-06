const Joi = require('joi');

const student_schema = Joi.object({
    id : Joi.number().integer().positive(),
    name: Joi.string().min(5).required(),
    class :Joi.string().min(3).max(10).required()
});

const student_update_schema = Joi.object({
    id : Joi.number().integer().positive(),
    name: Joi.string().min(5),
    class :Joi.string().min(3).max(10)
});

module.exports.student_schema=student_schema;
module.exports.student_update_schema=student_update_schema;