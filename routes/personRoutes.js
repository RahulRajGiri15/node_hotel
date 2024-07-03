const express = require('express');
const router = express.Router();

const person = require('./../models/person');
const {jwtAuthMiddleware,generateToken} = require('./../jwt')

router.post('/signup', async(req,res)=>{///async ---means asyncronous function --- it will take long time to execute //////create
    try{
        const data = req.body  //////all the user data is stored in data
        const newPerson = new person(data);

        const response = await newPerson.save();//////await ---it is used to when we have to wait ---await --it will wait till the above function is executed 
        console.log('data saved');
        const payload = {   /////token contains payload and salt key to make token
            id:response.id,
            username : response.username
        }
        console.log(JSON.stringify(payload));
        const token = generateToken(payload);
        console.log("Token is :    ",token);


        res.status(200).json({response:response ,token:token}  );//////200 -http response means that file is succesfully saved 
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'})
    }
})


// Login route
router.post('/login', async (req, res) => {
     try {
         // Extract username and password from request body 
        const { username, password } = req.body; 
        // Find the user by username 
        const user = await person.findOne({ username: username });
         // If user does not exist or password does not match, 
        
         if (!user || !(await user.comparePassword(password)))
             { 
                return res.status(401).json({ error: 'Invalid username or password' });
         } 
         const payload = { 
            id: user.id,
             email: user.email
             } // Generate JWT token 
        const token = generateToken(payload); // Send token in response
         res.json({ token });
         } catch (err) {
             console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } });

router.get('/',jwtAuthMiddleware, async(req,res)=>{                          ////////////////READ
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

//////now we will create a profile route in which when we will pass token of the profile than it will show the data of that person
router.get('/profile',jwtAuthMiddleware, async(req,res)=>{
    try{
        const userId=req.user.id;
        const user = await person.findById(userId);
        // If user does not exist, return error 
        if (!user) { return res.status(404).json({ error: 'User not found' }); }
    //send user profile as json response    
    res.json(user);
} catch (err){
    console.log(err);
    res.status(500).json({error:"Internal server error"})
}

});

/////////int his all the persons with a particular kind of work will be displayed 
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
    
///here we update  the data 
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