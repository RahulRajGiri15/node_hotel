//const { uniqueId } = require('lodash');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
    
})

personSchema.pre('save', async function(next){ ////////////////////pre --it a method used in mongodb to hash the password just before saving the data in database
    const person =this; 
    //Hash the password only if the password has been modified (or is new)
    if(!person.isModified('password')) return next();
    try {
        //hash password generation
        const salt = await bcrypt.genSalt(10);   //////salt of ten length is created
        const hashedPassword = await bcrypt.hash(person.password,salt); //////here hash password is generated using person password and salt 
        person.password=hashedPassword ;
        next();
    } catch (error) {
        return next(error);
    }
})

/*

During login when we enter the password to check the entered password is correct or wrong 
than the steps are as follows 
1-- take salt of original password 
2-- convert the login password with salt and finally 
3--- check weather the converted hash password is equal to original hash  password

*/




personSchema.methods.comparePassword = async function (candidatePassword){
    try {
        //////////use bcrypt to compare the provided password with the hased password 
        const isMatch = await bcrypt.compare(candidatePassword, this.password);

        return isMatch;
    } catch (error) {
        throw error;
    }
}

//create person model
const Person=mongoose.model('Person',personSchema);
module.exports = Person;

     
/*
//////////////////// Errors faced while making a program //////////////
1-- in palce of methods i used method 
2--- always define bcrypt berfore using it --- const bcrypt = require('bcrypt')
3--- 

*/
