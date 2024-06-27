const { uniqueId } = require('lodash');
const mongoose = require('mongoose');

// Define this person schema

const personSchema =new mongoose.Schema({
    name:{
        type: String,
        require: true/////////required is added to those places where you have to fill thoese details //not filling is not allowed 
    },
    age:{
        type: Number,

    },
    work:{
        type:String,
        enum:["waiter","manager","chef"],
        require:true
    },
    mobile:{
        type:String
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        require:true
    }
    
})

//create person model
const Person=mongoose.model('Person',personSchema);
module.exports = Person;

    