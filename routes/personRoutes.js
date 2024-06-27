const express = require('express');
const router = express.Router();

const person = require('./../models/person');

router.post('/', async(req,res)=>{///async ---means asyncronous function --- it will take long time to execute //////create
    try{
        const data = req.body
        const newPerson = new person(data);

        const response = await newPerson.save();//////await ---it is used to when we have to wait ---await --it will wait till the above function is executed 
        console.log('data saved');
        res.status(200).json(response);//////200 -http response means that file is succesfully saved 
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'})
    }
})

router.get('/', async(req,res)=>{                          ////////////////READ
    try{
        const data = await person.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'})
    }
})


router.get('/:workType',async(req,res)=>{
    const workType = req.params.workType;////Extract the work type from the url parameters 
    try {
        if (workType=="chef" || workType=="waiter" || workType=="manager"){
            const response = await person.find({work: workType});
            console.log("data feteched"); 
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:"Invalid workType "});
        }
        }
     catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal error"});
    }
})
    

router.put('/:id', async(req,res)=>{
    
    try {
        const personId = req.params.id;
        const updatedpersondata =req.body;
        const response = await person.findByIdAndUpdate(personId,updatedpersondata,{
            new: true,
            runValidators:true,})
        if(!response){
            res.status(404).json({error:"person note found"})
        }
        console.log("data updated");
        res.status(200).json(response);
        
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal error"});
    }
})
router.delete('/:id',async(req,res)=>{
    
    try {
        const personId=req.params.id;
        const response= await person.findByIdAndDelete(personId);
        if(!response){
            res.status(404).json({error:"person not found"})
        }
        console.log("person deleted");
        res.status(200).json({message:"Person successfully deleted"})
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal error"});
    }
})
module.exports = router;