const { type } = require('express/lib/response');
const mongoose = require('../db/connection');
// const ExcerciseNameSchema = new mongoose.Schema({ name: String });
const WorkOutSchema = new mongoose.Schema(
    {
        label: {type: String, required: true},

        img: String,
          
        excercise: {          
          name: [String],
          sets: Number,
          description: String
        },
        date: String
         
    });
    

const WorkOut = mongoose.model("WorkOut", WorkOutSchema)

module.exports = WorkOut;